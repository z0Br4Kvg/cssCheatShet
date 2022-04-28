import * as React from "react";

import {useContext, useMemo} from "react";
import {TaskApi} from "./Task";
import {StateAPI} from "./StateAPI";
import {PropertyView} from "./PropertyView";
import {PropertyAdd} from "./PropertyAdd";

export const UUIDContext = React.createContext(null)

export const PropertyList = () => {
  const api: StateAPI = useContext(TaskApi)

  const htmlItem = api.getFirstSelectedItem()
  if(htmlItem === '0') return <></>
  const propertyAdd = useMemo(() => {
    return <PropertyAdd htmlItemUUID={htmlItem.uuid}/>
  }, [api.getPropertiesIDByItemUUID(htmlItem.uuid)])
  return (
    <div>
      { propertyAdd }
      <div className='property__list'>
        {htmlItem.properties.map( property => {
          const uuidContext = {htmlItemUUID: htmlItem.uuid, propertyUUID: property.uuid}
          if(!property.isSelect) return <></>

          return <UUIDContext.Provider value={uuidContext} key={'context-provider' + uuidContext.htmlItemUUID + uuidContext.propertyUUID}>
            <PropertyView key={uuidContext.toString()}/>
          </UUIDContext.Provider>
        })}
      </div>
    </div>
  )

}