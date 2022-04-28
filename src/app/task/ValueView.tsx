import {cssValueDataTypeID} from "../data/raw/dataValues";
import * as React from "react";
import {useEffect, useState} from "react";
import {cssValueAncestor, cssValueColor, cssValueKeyword, cssValueLength} from "../data/cssValue";


type Value = {
  value: cssValueAncestor | cssValueLength | cssValueKeyword | cssValueColor,
  onChange: (valueUUID: string, value: any) => void
}

export const ValueView = (props: Value) => {
  const {value} = props
  const keyword = value.type === cssValueDataTypeID.keyword
  const length = value.type === cssValueDataTypeID.length || value.type === cssValueDataTypeID.percentage
  const color = value.type === cssValueDataTypeID.color

  const cl = value.active ? 'property__value--active' : 'property__value'

  return <div className={cl}>
    { keyword && <ValueKeyword {...props} /> }
    { length && <ValueLength {...props} /> }
    { color && <ValueColor {...props} /> }
  </div>
}

type ValueKeywordProps = {
  value: cssValueKeyword,
  onChange: (valueUUID: string, value: any) => void
}

export const ValueKeyword = (props: ValueKeywordProps) => {
  const {value, onChange} = props
  return <>
    <div className='property__value-keyword'
         onClick={ () => onChange(value.uuid, value.value) }
    >
      {value.value}
    </div>
  </>
}


type ValueLengthProps = {
  value: cssValueLength,
  onChange: (valueUUID: string, value: any) => void
}

export const ValueLength = (props: ValueLengthProps) => {
  const {value, onChange} = props

  const [inputValue, onChangeInputValue] = useState(value.value)


  return <React.Fragment>
    <input className='property__value-input-number-input'
           value={inputValue}
           onChange={(e) => onChangeInputValue(e.target.value) }
    />
    <div className='property__value-input-number-keyword'
         onClick={ () => onChange(value.uuid, inputValue) }
    >{value.unit}</div>
  </React.Fragment>
}


type ValueColorProps = {
  value: cssValueColor,
  onChange: (valueUUID: string, value: any) => void
}

export const ValueColor = (props: ValueColorProps) => {
  const {value, onChange} = props
  const [inputValue, onChangeInputValue] = useState(value.value)

  useEffect(() => {
    onChangeInputValue(props.value.value)
  }, [props])

  return <React.Fragment>
    <input className='property__value-input-number-input'
           type='color'
           value={inputValue}
           onChange={(e) => {

             onChangeInputValue(e.target.value)
             onChange(value.uuid, e.target.value)
           } }
    />
  </React.Fragment>
}