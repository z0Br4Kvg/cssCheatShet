import {cssValueDataTypeID, cssValueID, VALUES_API} from "./raw/dataValues";
import { v4 as uuidv4 } from 'uuid'

export class cssValueAncestor {
  id: cssValueID
  uuid: string
  value: any
  active: boolean

  constructor(id: cssValueID, active: boolean, value?: any) {
    this.id = id
    this.active = active
    this.uuid = uuidv4()
    this.value = value
  }

  get style(): any {
    return this.value
  }

  get type(): cssValueDataTypeID {
    return VALUES_API.getTypeByID(this.id)
  }

  public updateUUID = () => {
    this.uuid = uuidv4()
  }

  public setActive = () => {
    this.active = true
    return this
  }

  public resetActive = () => {
    this.active = false
    return this
  }

  public setValue = (value: any) => {
    this.value = value
    this.active = true
    return this
  }
}

export class cssValueLength extends cssValueAncestor {
  unit: string
  min: number
  max: number

  constructor(id: cssValueID, value: number, active: boolean = false, min: number = null, max: number = null) {
    super(id, active, value)
    this.min = min
    this.max = max
    this.unit = VALUES_API.getUnit(id)
  }

  public get style() {
    return this.value + this.unit
  }

}

export class cssValueKeyword extends cssValueAncestor {
  constructor(id: cssValueID, active: boolean = false) {
    super(id, active, VALUES_API.getValue(id))
  }
}

export class cssValueColor extends cssValueAncestor {
  constructor(id: cssValueID, active: boolean, value: string) {
    super(id, active, value)
  }
}

export class cssValue{
  constructor(id: cssValueID, active: boolean = false, global: boolean = false ) {
    const type = VALUES_API.getTypeByID(id)
    if(type === cssValueDataTypeID.length || type === cssValueDataTypeID.percentage) {
      if( global ) return new cssValueLength(id, 0, active, 0, 0)
      return (value: number = 0, min: number = -1, max: number = -1) => new cssValueLength(id, value, active, min, max)
    } else if (type === cssValueDataTypeID.keyword) {
      return new cssValueKeyword(id, active)
    } else if (type === cssValueDataTypeID.color) {
      if (global) return new cssValueColor(id, active, '#00000')
      return (value: string) => new cssValueColor(id, active, value )
    }
  }
}

export const cssValueGlobal = function(id: cssValueID) {
  const type = VALUES_API.getTypeByID(id)
  if(type === cssValueDataTypeID.length || type === cssValueDataTypeID.percentage) {
    return new cssValueLength(id, 0, false, null, null)
  } else if (type === cssValueDataTypeID.keyword) {
    return new cssValueKeyword(id, false)
  } else if (type === cssValueDataTypeID.color) {
    return new cssValueColor(id, false, '#00000')
  }
}