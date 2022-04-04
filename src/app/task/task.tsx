import * as React from 'react';
import {useEffect, useMemo, useState} from "react";
const _ = require('lodash')

import {child, ChildPropertiesUtil, cssProperty, SelfPropertiesUtil} from "../DATA/cssProperty";
import {PropertyList} from "./propertyList";
import {cssValue} from "../DATA/cssValue";
import {cssPropertyID} from "../DATA/dataProperties";
import {Workspace} from "./workspace";
import {ItemMenu} from "./itemMenu";
import {grouping} from "../middleLayer/pages";


type Props = {
  title: string,
  property: {
    self: cssProperty[],
    child: Array<child>,
    groupingChild?: grouping[]
  }
};

export const Task = (props: Props) => {

  const {property : {self, child, groupingChild}} = props
  const [stateSelf, onChangeSelf] = useState(self)
  const [stateChild, onChangeChild] = useState(child)
  const [groups, onChangeGroups] = useState(groupingChild)

  useEffect(()=> {
    const {property : {self, child, groupingChild}} = props
    onChangeChild(child)
    onChangeSelf(self)
    onChangeGroups(groupingChild.length === 0 ? Array(1).fill(true) : groupingChild )
  }, [props])

  const updateStateSelf = () => (id: cssPropertyID) => (value: cssValue) => {
    onChangeSelf(prev => {
      return prev.map( prop => prop.id === id ? new cssProperty(prop.id, prop.valuesID, value) : prop)
    })
  }

  const updateStateChild = () => (id: cssPropertyID) => (value: cssValue) => {
    onChangeChild(prev => {
      let ans = _.cloneDeep(prev)
      ChildPropertiesUtil.activeItemsIndex(stateChild).forEach(index => {
        ans[index].properties = prev[index].properties.map( prop => prop.id === id ? new cssProperty(prop.id, prop.valuesID, value) : prop)
      })
      return ans
    })
  }

  const toggleItem = (i: number, opt?: 'only' | 'setAll' | 'resetAll' | '') => {
    onChangeChild( prev => {
      return prev.map( (child, n) => {
        if (opt === 'only') return n === i ? {...child, isSelect: true} : {...child, isSelect: false}
        if (opt === 'setAll') return {...child, isSelect: true}
        if (opt === 'resetAll') return {...child, isSelect: false}
        return n === i ? {...child, isSelect: !child.isSelect} : child
      })
    })
  }

  const changeCount = (opt: 'add' | 'del') => {
    const onAdd = () => onChangeChild( prev => prev.concat( ChildPropertiesUtil.newItem(prev) ))
    const onDel = () => onChangeChild( prev => prev.slice(0,  prev.length === 1 ? 1 : -1) )
    if (opt === 'add') return onAdd
    if (opt === 'del') return onDel
  }

  const propertyListPropsSelf = {cssPropList: stateSelf, onChange: updateStateSelf()}
  const propertyListPropsChild = {cssPropList: ChildPropertiesUtil.propertyList(stateChild), onChange: updateStateChild()}
  const workspaceProps = {self: SelfPropertiesUtil.inlineStyles(stateSelf), child: ChildPropertiesUtil.inlineStyles(stateChild)}
  const itemMenuProps = {items: ChildPropertiesUtil.activeItems(stateChild),toggleItem: toggleItem,onAdd: changeCount('add'),onDel: changeCount('del')}

  return (
    <div className='task'>
      <div className={'task__side'}>
        <div className="property__h1">CSS-property Parent Container</div>
        {
          useMemo(() => {
            return <PropertyList {...propertyListPropsSelf} />
          }, [stateSelf])
        }
        <div className="property__h1">CSS-property Child Items</div>
        <ItemMenu {...itemMenuProps} />
        {
          useMemo(()=> {
            return groups.map( ({title, propertiesID}) => {
              return (<React.Fragment key={title || 'propTitle'}>
                {title && <div className='property__h2'>{title}</div>}
                <PropertyList {...{
                  cssPropList: ChildPropertiesUtil.propertyList(stateChild, propertiesID),
                  onChange: updateStateChild()
                }} />
              </React.Fragment>)
            })
          }, [stateChild, groups])
        }
      </div>
      <div className='task__side'>
        <Workspace {...workspaceProps} />
      </div>
    </div>

  );
};