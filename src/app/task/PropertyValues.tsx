import * as React from "react";
import {StateAPI} from "./StateAPI";
import {ValueView} from "./ValueView";
import {useContext} from "react";
import {TaskApi} from "./Task";
import {UUIDContext} from "./PropertyList";

export const PropertyValues = () => {

  const api: StateAPI = useContext(TaskApi)
  const {htmlItemUUID, propertyUUID} = useContext(UUIDContext)

  let property = api.getPropertyByHtmiItemUUIDandPropertyUUID(htmlItemUUID, propertyUUID)
  const onChangeValue = api.setValue(htmlItemUUID)

  return (
    property.activeArgumentValues().map((arg,i) => {
      return (
        <div className='property__argument' key={i}>
          <div className='property__values-wrap'>
            {arg.values.map( (value, i) => {
              return <ValueView key={i}
                                value={value}
                                onChange={onChangeValue(property.uuid)} />
            })}
          </div>
        </div>
      )
    })
  )
}
