import * as React from 'react';
import {useContext} from 'react';
import {StateAPI} from "./StateAPI";
import {TaskApi} from "./Task";
import {ICONS, Icons} from "./Icons";

export const MenuItems = () => {
  const api: StateAPI = useContext(TaskApi)
  const uuids = api.getItemsUUIDsByParent('')
  return (
    <div className='item-menu'>
      {uuids !== '0' && uuids.map(uuid => {
          return <ItemMenuLine key={uuid} uuid={uuid}/>
        })}
    </div>
  )
}

type Props = {
  uuid: string
}
export const ItemMenuLine = (props: Props) => {
  const {uuid} = props
  const api: StateAPI = useContext(TaskApi)
  const cl = api.isSelectedByUUID(uuid) ? 'item-menu__line-item--active' : 'item-menu__line-item'

  const data = {
    onSelect: api.toggleIsSelectByUUID,
    onAdd: api.addItemByParent,
    onDel: api.delItemByUUID,
    childUUID: api.getItemsUUIDsByParent(uuid),
    level: api.getLevelByUUID(uuid),
    bgColor: api.getBgColorByHtmlItemUUID(uuid)
  }

  const clLine = `item-menu__line-${data.level}`

  return <React.Fragment>
      <div className={clLine} key={uuid}>
        <div className={cl}
             onClick={() => data.onSelect(uuid)}
        >{ data.level === 0 ? 'root' : uuid.slice(-4)}
          {data.bgColor !== '0' && <div className='item-menu__color-marker' style={data.bgColor}></div>}
        </div>
        <div className='item-menu__line-control'>
          <Icons icon={ICONS.add} onCLick={() => data.onAdd(uuid)} />
          {data.level !== 0 && <Icons icon={ICONS.trash} onCLick={() => data.onDel(uuid)}/>}
        </div>
      </div>
      {
        data.childUUID !== '0' && data.childUUID.map(child => {
          const p = {api: api, uuid: child}
          return <ItemMenuLine key={p.uuid} {...p} />
        })
      }
    </React.Fragment>
}