import * as React from "react";
import {StateAPI} from "./StateAPI";
import {useContext} from "react";
import {TaskApi} from "./Task";
import {UUIDContext} from "./PropertyList";
import {ValueColor, ValueView} from "./ValueView";
import {cssValue, cssValueColor, cssValueGlobal} from "../data/cssValue";

export const PropertyEditing = () => {

  const api: StateAPI = useContext(TaskApi)
  const {htmlItemUUID, propertyUUID} = useContext(UUIDContext)

  const onChangeValue = api.setValue(htmlItemUUID)
  const propertyGlobal = api.getPropertyByHtmiItemUUIDandPropertyUUID(htmlItemUUID, propertyUUID).getGlobal()

  const content = propertyGlobal.arguments.map( arg => {
    return (
        <div className='property__settings-argument'>
          <div className='property__settings-arg-count'>
            {arg.count} { arg.count == 1 ? 'аргумент' : 'аргумента'}
          </div>

          {
            arg.args.map( value => {
              return <div className='property__settings'>
                <div className="property__settings-hint">
                  {value.hint}
                </div>
                <div className="property__settings-values">
                  {value.values.map( id => <ValueView value={cssValueGlobal(id)} onChange={onChangeValue} />)}
                </div>
              </div>
            })
          }

        </div>
    )
  })

  return(
    <React.Fragment>
      <div className='property__argument'>
        <div className='property__settings-wrap'>
          {content}
        </div>
      </div>
    </React.Fragment>
  )
}