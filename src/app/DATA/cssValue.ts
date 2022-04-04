import {CSS_VALUES, cssUnitTypesID, cssValueID, cssValueTypeID, iCSSValue} from "./dataValues";

export class cssValueStatic {
  static readonly values = [...CSS_VALUES]

  static type(id: cssValueID): cssUnitTypesID {
    return cssValueStatic.values.filter(item => item.id === id )[0].type
  }
  static typeValue(id: cssValueID): cssValueTypeID[] {
    return cssValueStatic.values.filter(item => item.id === id )[0].type_value
  }
  static needUnit(id: cssValueID): boolean {
    return cssValueStatic.values.filter(item => item.id === id )[0].need_unit
  }
  static value(id: cssValueID): string|number {
    return cssValueStatic.values.filter(item => item.id === id )[0].value
  }
  static unit(id: cssValueID): string {
    return cssValueStatic.values.filter(item => item.id === id )[0].unit
  }
  static cssValue(id: cssValueID): iCSSValue {
    return cssValueStatic.values.filter(item => item.id === id )[0]
  }
  static cssGlobalValues(): iCSSValue[] {
    return cssValueStatic.values.filter(item => [
      cssValueID.inherit, cssValueID.unset, cssValueID.initial
    ].includes(item.id) )
  }
  static cssLengthValues(): iCSSValue[] {
    return cssValueStatic.values.filter(item => [
      cssValueID.px, cssValueID.em, cssValueID.rem,
      cssValueID.vh, cssValueID.vw, cssValueID.vmin,
      cssValueID.vmax, cssValueID.percentage
    ].includes(item.id) )
  }
}

export class cssValue {
  id: cssValueID
  _value: string|number
  unit: string
  minValue: ''|number
  maxValue: ''|number

  constructor(
    id: cssValueID,
    value?: string,
    unit?: string,
    minValue: ''|number = '',
    maxValue: ''|number = ''

  ) {
    this.id = id
    this._value = typeof value === 'undefined' ? cssValueStatic.value(id) : value
    this.unit = typeof unit === 'undefined' ? cssValueStatic.unit(id) : unit
    this.minValue = minValue
    this.maxValue = maxValue
  }

  set value(value: string|number) {
    let ok = this.minValue === '' ? true : value >= this.minValue
    ok = this.maxValue === '' ? ok : value <= this.maxValue
    this._value = ok ? value : this._value
  }

  get value() {
    return this._value
  }

  get style(): string{
    return cssValueStatic.needUnit(this.id) ? this.value.toString() + this.unit : this.value.toString()
  }

  get type() : cssUnitTypesID {
    return cssValueStatic.type(this.id)
  }

  equal(value: cssValue) {
    return (this.id === value.id) && (this.value === value.value) && (this.unit === value.unit)
  }

}