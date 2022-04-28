// @flow 
import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import {DefaultPropertyAPI} from "../data/defaults/defaultProperty";
import {TaskApi} from "./Task";
import {StateAPI} from "./StateAPI";
import {cssPropertyID} from "../data/raw/dataProperties";
import {defaultFlexHtmlItem, defaultBaseHtmlItem, defaultRootHtmlItem} from "../data/defaults/defaultHtmlItem";
const _ = require('lodash')

type Props = {
  htmlItemUUID: string
};

export const PropertyAdd = (props: Props) => {
  const {htmlItemUUID} = props
  const api: StateAPI = useContext(TaskApi)
  const propertyList = DefaultPropertyAPI.getIDSandTitle()

  const [listVisible, changelistVisible] = useState(false)
  const [selectedProperties, onChangeSelectedProperties] = useState( api.getPropertiesIDByItemUUID(htmlItemUUID) )

  useEffect(() => {
    onChangeSelectedProperties(prev => {
      return api.getPropertiesIDByItemUUID(htmlItemUUID)
    })
  }, [api.getPropertiesIDByItemUUID(htmlItemUUID).length])

  useEffect( () => {
    api.updatePropertiesByItemUUIDAndPropertyIDS(htmlItemUUID, selectedProperties)
  }, [selectedProperties])

  const updateSelectedProperties = (id: cssPropertyID) => {
    onChangeSelectedProperties(prev => {
      return prev.includes(id) ? prev.filter(prop_id => prop_id !== id) : prev.concat([id])
    })
  }

  const clNameList = listVisible ? 'property-add__list--visible' : 'property-add__list--hidden'
  return (
    <div className='property-add'>

      <div className="property-add__presets">
        <div className="property-add__presets-inner-wrap">
          <div className="property-add__presets-title-block">
            <div className="property-add__presets-title">Properties Presets:</div>
          </div>
          <div className="property-add__presets-items">
            <div className="property-add__presets-item" key='root'
                 onClick={() => api.applyPresetByItemUUIDAndPreset(htmlItemUUID, new defaultRootHtmlItem) }
            >root</div>
            <div className="property-add__presets-item" key='flex'
                 onClick={() => api.applyPresetByItemUUIDAndPreset(htmlItemUUID, new defaultFlexHtmlItem) }
            >flex</div>
            <div className="property-add__presets-item" key='base'
                 onClick={() => api.applyPresetByItemUUIDAndPreset(htmlItemUUID, new defaultBaseHtmlItem) }
            >base</div>
          </div>
        </div>
      </div>


      <div className="property-add__properties">
        <div className="property-add__properties-inner-wrap">
          <div className="property-add__properties-title-block">
            <div className="property-add__properties-title">Properties:</div>
          </div>
          <div className="property-add__properties-items">
            {
              api.getPropertiesByItemUUID(htmlItemUUID).map( ({uuid, title, isSelect}) => {
                const clName = isSelect ? 'property-add__properties-item--active' : 'property-add__properties-item'
              return <div key={uuid} className={clName}
                onClick={() => api.toggleIsSelectPropertyByHtmlItemUUID(htmlItemUUID, uuid) }
              >{title}</div>
            })
            }
          </div>
        </div>
        <div className="property-add__properties-inner-wrap">
          <div className='property-add__properties-button' onClick={() => changelistVisible(prev => !prev)}>Edit property list</div>
        </div>
      </div>

      <div className={clNameList}>
        {
          propertyList.map( property => {
            const clNameListItem = selectedProperties.includes(property.id) ? 'property-add__list-item--active' : 'property-add__list-item'
            return <div className={clNameListItem} key={htmlItemUUID + '_id: ' + property.id}
                        onClick={() => updateSelectedProperties(property.id )}
            >{property.title}</div>
          })
        }
      </div>
    </div>
  );
};