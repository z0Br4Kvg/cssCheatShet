import {cssPropertyID, dataProperty, PROPERITES_API} from "./raw/dataProperties";
import { v4 as uuidv4 } from 'uuid'
import {cssValueAncestor, cssValueColor, cssValueKeyword, cssValueLength} from "./cssValue";
import {DefaultPropertyAPI, propertyConstructorObject} from "./defaults/defaultProperty";
const _ = require('lodash')

export interface iCSSPropertyArgs {
  hint: string,
  values: cssValueAncestor[] | cssValueLength[] | cssValueKeyword[] | cssValueColor[]
}

interface iCSSPropertyArguments {
  count: number,
  active: boolean,
  args: iCSSPropertyArgs[]
}

interface iCSSProperty {
  id: cssPropertyID,
  uuid: string
  isSelect: boolean
  arguments: iCSSPropertyArguments[]
}

export class cssProperty {
  property: iCSSProperty

  constructor(property: propertyConstructorObject | dataProperty | cssPropertyID) {

    if (typeof property.id !== 'undefined') {
      this.property = _.cloneDeep(property)

    } else {
      this.property = _.cloneDeep( DefaultPropertyAPI.getById(property))
    }
    this.property.uuid = uuidv4()
    this.property.isSelect = true
  }

  public getGlobal = () => {
    return PROPERITES_API.getByID(this.id)
  }

  public get isSelect () {
    return this.property.isSelect
  }

  public setIsSelect = () => {
    this.property.isSelect = true
    return this
  }

  public resetIsSelect = () => {
    this.property.isSelect = false
    return this
  }

  public toggleIsSelect = () => {
    this.property.isSelect = !this.property.isSelect
    return this
  }

  public updateUUID() {
    this.property.uuid = uuidv4()
    return this
  }

  public get id(): cssPropertyID {
    return this.property.id
  }

  public get uuid(): string {
    return this.property.uuid
  }

  public set uuid(uuid) {
    this.property.uuid = uuid
  }

  public get title(): string {
    return PROPERITES_API.getByID(this.property.id).title
  }

  public get react(): string {
    return PROPERITES_API.getReactByID(this.property.id)
  }

  public get style (): any {
    let ans = this.activeArgumentValues().map( arg => arg.values ).map( arrVal => arrVal.filter(val => val.active)[0] )
    return {
      [this.react]: ans.map(a   => a.style).join(' ')
    }
  }

  public availableArgCount = () : {count: number, active: boolean}[] => {
    return this.property.arguments.map(val => {
      return {count: val.count, active: val.active}
    })
  }

  public activeArgumentCounts = () : number => {
    for(let i = 0; i < this.property.arguments.length; i++) {
      if (this.property.arguments[i].active === true) return this.property.arguments[i].count
    }
  }

  public activeArgumentValues = () => {
    return this.property.arguments.filter(val => val.active)[0].args
  }

  public toggleActiveArgumentCount = (count: number) => {
    this.property.arguments = this.property.arguments.map( args => {
      if(args.count === count) return {
        count: args.count,
        active: true,
        args: args.args
      }
      return {
        count: args.count,
        active: false,
        args: args.args
      }
    })
    return this
  }

  public setNewValue = (uuid: string, newValue: any) => {
    this.property.arguments = this.property.arguments.map(argument => {
      return {
        count: argument.count,
        active: argument.active,
        args: argument.args.map( arg => {
          if (!arg.values.map(v => v.uuid).includes(uuid)) return arg
          return {
            hint: arg.hint,
            values: arg.values.map( value => value.uuid === uuid ? value.setValue(newValue) : value.resetActive() )
          }
        })
      }
    })
    return this
  }

}
