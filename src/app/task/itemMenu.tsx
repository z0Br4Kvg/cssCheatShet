// @flow
import * as React from 'react';
import {ChildPropertiesUtil} from "../DATA/cssProperty";

type Props = {
  items: boolean[]
  toggleItem: (i: number, opt?: 'only' | 'setAll' | 'resetAll' | '') => void
  onAdd: () => void
  onDel: () => void
}

export const ItemMenu = (props: Props) => {
  const {items, toggleItem, onAdd, onDel} = props

  const handleClick = (e: any, i: number) => {
    if (e.type === 'contextmenu') {
      e.preventDefault()
      toggleItem(i)
    } else {
      toggleItem(i, 'only')
    }
  }

  return (
    <div className='task__workspace-menu'>
      <div className='task__workspace-menu-buttons'>
        <div className="task__workspace-menu-buttons-item" onClick={() => onAdd()}>+</div>
        <div className="task__workspace-menu-buttons-item" onClick={() => onDel()}>-</div>
      </div>
      <div className='task__workspace-menu-items-wrap'>
        {items.map((active, i) => {
          const style = active ? 'task__workspace-menu-item--active' : 'task__workspace-menu-item'
          return (<div
            key={'task__workspace-menu-item' + i}
            onClick={(e) => handleClick(e, i) }
            onContextMenu={ (e) => handleClick(e, i) }
            className={style}>{i+1}</div>)
        })}
      </div>
    </div>
  );
};