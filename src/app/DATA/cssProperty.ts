import {cssValue} from "./cssValue";
import {CSS_PROPERTIES, cssPropertyID, iCSSProperty} from "./dataProperties";
import {cssValueID, iCSSValue} from "./dataValues";

export class cssPropertyStatic {
  static readonly _properties = [...CSS_PROPERTIES]

  static cssProperty(id: cssPropertyID): iCSSProperty {
    return cssPropertyStatic._properties.filter(item => item.id === id)[0]
  }

  static title(id: cssPropertyID): string {
    return cssPropertyStatic._properties.filter(item => id === item.id)[0].title
  }

  static react(id: cssPropertyID): string {
    return cssPropertyStatic._properties.filter(item => item.id === id)[0].react
  }

  static values(id: cssPropertyID): cssValueID[] {
    return cssPropertyStatic._properties.filter(item => id === item.id)[0]
      .values.map(item => item.id)
  }

  static valuesOnly(id: cssPropertyID, valuesID: readonly cssValueID[]) : cssValueID[] {
    return cssPropertyStatic.values(id)
      .filter( id => valuesID.includes(id) )
  }
  static valuesWithUnsetOnly(id: cssPropertyID) : cssValueID[] {
    return cssPropertyStatic.values(id)
      .filter( id => ![cssValueID.inherit, cssValueID.initial].includes(id) )
  }
}

export class cssProperty {
  readonly id: cssPropertyID
  readonly _values: cssValueID[]
  _activeValue: cssValue
  conflict: cssValue[]

  constructor(
    id: cssPropertyID,
    values: cssValueID[],
    defaultValue: cssValue
  ) {
    this.id = id
    this._values = values
    this._activeValue = new cssValue(defaultValue.id, defaultValue.value.toString(), defaultValue.unit)
    this.conflict = []
  }

  get title(): string {
    return cssPropertyStatic.title(this.id)
  }

  get react(): string {
    return cssPropertyStatic.react(this.id)
  }

  get values(): cssValue[] {
    return this._values.map(id => new cssValue(id))
  }

  get valuesID() : cssValueID[] {
    return this._values
  }

  get style() : string {
    return this._activeValue.style
  }

  get activeValue() {
    const ans = new cssValue( this._activeValue.id, this._activeValue.value.toString(), this._activeValue.unit )
    //console.log(ans)
    return ans
  }


  solveConflict() : void {
    if (this.conflict.length === 0) return

    let ans = [this.conflict[0]]
    this.conflict.forEach(value => {
      if (!ans.some(item => value.equal(item)) ) {
        ans.push(value)
      }
    })

    if( ans.length !== 1) {
      this.conflict = ans
    }
    this.conflict = this.activeValue.equal( ans[0] ) ? [] : ans

  }

}

export type child = {
  isSelect: boolean
  properties: cssProperty[]
}

export class SelfPropertiesUtil {

  static inlineStyles(propertyList: cssProperty[]) : Record<string, string> {
    let ans : Record<string, string> = {}
    propertyList.forEach(({react, style}) => {
      ans[react] = style
    })
    return ans
  }

}

export class ChildPropertiesUtil {

  static getState(count: number, child: readonly cssProperty[]): Array<child> {
    return Array(count).fill(true).map(item => {
      return {
        isSelect: true,
        properties: [...child]
      }
    })
  }

  static newItem(state: readonly child[], isSelect: boolean = true) {
    return {
      isSelect,
      properties: ChildPropertiesUtil.propertyList(state)
    }
  }

  static count(state: readonly child[]) : number {
    return state.length
  }

  static activeItems(state: readonly child[]) : boolean[] {
    return state.map(child => child.isSelect)
  }

  static activeItemsIndex(state: readonly child[]) : number[] {
    return ChildPropertiesUtil.activeItems(state)
      .map( (isSelect, index) => isSelect ? index : -1 )
      .filter( index => index !== -1)
  }

  static propertyList(state: readonly child[], only?: readonly cssPropertyID[]) : cssProperty[] {
    const activeItemsIndex = ChildPropertiesUtil.activeItemsIndex(state)
    if (activeItemsIndex.length === 0) return state[0].properties

    const countProp = state[0].properties.length

    let ans = Array(countProp).fill(false)
    for (let propN = 0; propN < countProp; propN++) {
      l1: for (let prop of activeItemsIndex.map(i => state[i].properties)  ) {
        const {id, valuesID, activeValue} = prop[propN]

        if( typeof only !== 'undefined' && !only.includes(id)) continue l1

        if (ans[propN] === false) {
          prop[propN].conflict = []
          ans[propN] = prop[propN]
        }
        ans[propN].conflict.push( activeValue )
        ans[propN].solveConflict()

      }
    }
    return ans.filter(item => item !== false)
  }

  static inlineStyles( state: readonly child[]): Record<string, string>[] {
    let ans: Record<string, string>[] = []
    state.forEach( ({properties}) => {
      ans.push( SelfPropertiesUtil.inlineStyles(properties)  )
    })
    return ans
  }

}