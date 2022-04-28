import * as React from 'react';
import {StateAPI} from "./StateAPI";
import {useContext} from "react";
import {TaskApi} from "./Task";
import {UUIDContext} from "./PropertyList";

export const PropertyArgumentMenu = () => {
  const api: StateAPI = useContext(TaskApi)
  const {htmlItemUUID, propertyUUID} = useContext(UUIDContext)

  const args = api.getPropertyByHtmiItemUUIDandPropertyUUID(htmlItemUUID, propertyUUID).availableArgCount()
  const onChange = api.toggleArgumentCount

  if(args.length === 1) return <div className='property__arg-count'></div>

  return <div className='property__arg-count'>
    {
      args.map( arg => {
        const clName = arg.active ? 'property__arg-count-item--active': 'property__arg-count-item'
        const text1 = (arg.count) === 1 ? `${arg.count} аргумент` : `${arg.count} аргумента`
        const text2 = arg.count
        return (
          <div key={arg.count} className={clName}
            onClick={() => onChange(htmlItemUUID, propertyUUID, arg.count)  }
          >{text2}</div>
        )
      })
    }
  </div>
}