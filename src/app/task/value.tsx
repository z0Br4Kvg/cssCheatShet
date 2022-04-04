import * as React from 'react';
import {cssUnitTypesID, iCSSValue} from "../DATA/dataValues";
import {cssValue} from "../DATA/cssValue";
import {useMemo, useState} from "react";

type Props = {
  value: cssValue,
  activeValue: cssValue,
  onChange: (value: cssValue) => void,
  conflict: cssValue[],
};
export const Value = (props: Props) => {
  const {value} = props
  const keyword = value.type === cssUnitTypesID.keyword
  const other = value.type !== cssUnitTypesID.keyword
  return <React.Fragment>
    {keyword && <ValueKeyword {...props}/>}
    {other && <ValueOther {...props} /> }
  </React.Fragment>
};

export const ValueKeyword = (props: Props) => {

  const {value, activeValue, onChange, conflict} = props
  let clName = activeValue.unit === value.unit ? 'property__value-item--active' : 'property__value-item'

  if (conflict.length !== 0) {
    clName = activeValue.unit === value.unit ?  'property__value-item--conflict' : 'property__value-item'
    clName = conflict.map( item => item.unit).includes( value.unit ) ? 'property__value-item--conflict' : clName
  }

  return <span
    key={'unit-' + value.unit}
    className={clName}
    onClick={() => onChange(value)}
  >{value.value}</span>
}

export const ValueOther = (props: Props) => {
  const {value, activeValue, onChange, conflict} = props
  const isActive = activeValue.unit === value.unit
  let clName =  isActive ? 'property__value-item--active' : 'property__value-item'

  if (conflict.length !== 0) {
    clName = activeValue.unit === value.unit ?  'property__value-item--conflict' : 'property__value-item'
    clName = conflict.map( item => item.unit).includes( value.unit ) ? 'property__value-item--conflict' : clName
  }

  const [valueInput, onChangeInput] = useState( isActive ? activeValue.value : value.value)
  useMemo(()=>{
    activeValue.unit === value.unit ? onChangeInput( props.activeValue.value ) : true
  }, [props.activeValue])

  const handleKeyPress = (event: React.KeyboardEvent, value: cssValue,) : void => {
    if (event.key === 'Enter') return onChange(value)
  }

  return (
    <div className={clName}>
      <input className={'property__item-complex-input'}
        value={valueInput}
        onKeyPress={ (event: React.KeyboardEvent ) => {handleKeyPress(event, new cssValue(value.id, valueInput.toString(), value.unit ) ) } }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value) }
      />
      <span className={'property__item-complex-unit'}
        onClick={ () => onChange( new cssValue(value.id, valueInput.toString(), value.unit ) ) }
      >{value.unit}</span>
    </div>
  )
}