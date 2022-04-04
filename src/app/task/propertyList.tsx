import * as React from "react";
import {cssProperty, cssPropertyStatic} from "../DATA/cssProperty";
import {cssPropertyID} from "../DATA/dataProperties";
import {cssValue} from "../DATA/cssValue";
import {Value} from "./value";

type Props = {
  cssPropList: cssProperty[],
  onChange: (id: cssPropertyID) => (value: cssValue) => void
}

export const PropertyList = (props: Props) => {
  const {cssPropList, onChange} = props

  return (
    <div className='task__property-list'>
      {
        cssPropList.map(property => {
          return (
            <div key={'property-' + property.id} className="property">
              <div className='property__name'>{property.title}</div>
              <div className='property__values'>
                {property.values.map(value => {
                    const valueProps = {
                      value: value,
                      activeValue: property.activeValue,
                      onChange: onChange(property.id),
                      conflict: property.conflict,
                    }
                    return <Value key={value.unit + value.value} {...valueProps} />
                  })}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}