import {htmlItemID} from "./raw/dataHTML";
import {cssProperty} from "./cssProperty";
import {defaultHtmlItemConstructorObject} from "./defaults/defaultHtmlItem";
import {v4 as uuidv4} from "uuid";
import {cssPropertyID} from "./raw/dataProperties";
import * as React from "react";
const _ = require('lodash')

export class HtmlItem {
  type: htmlItemID
  properties: cssProperty[]
  isSelect: boolean
  level: number
  uuid: string
  parent: string
  title: string
  className: 'HtmlItem'

  constructor(
    HtmlItem: defaultHtmlItemConstructorObject,
    level: number = 1,
    parent: string = 'workspace',
    isSelect: boolean = false) {

    this.type = HtmlItem.type
    this.properties = HtmlItem.properties
    this.isSelect = isSelect
    this.level = level
    this.uuid = level === 0 ? 'workspace' : uuidv4()
    this.parent = parent
    this.title = this.uuid.slice(-4)
  }

  public setSelect = () => {
    this.isSelect = true
    return this
  }

  public resetSelect = () => {
    this.isSelect = false
    return this
  }

  public toggleIsSelect = () => {
    this.isSelect = !this.isSelect
    return this
  }

  public getPropertiesUUIDAndTitleAndIsSelect = () => {
    return this.properties.map(property => {
      return {
        uuid: property.uuid,
        title: property.title,
        isSelect: property.isSelect()
      }
    })
  }

  public togglePropertyIsSelectByUUID = (uuid: string) => {
    this.properties.map( property => property.uuid === uuid ? property.toggleIsSelect() : property )
    return this
  }

  public get style(): Record<string, string> {
    return Object.assign({}, ...this.properties.map(p => p.style) )
  }

  public setNewValue = (id: cssPropertyID, uuid: string, newValue: any) => {
    this.properties = this.properties.map( property => {
      if (property.id !== id) return property
      return property.setNewValue(uuid, newValue)
    })
    return this
  }

  public setNewValueByPropertyUUID = (propertyUUID: string, valueUUID: string, value: any): HtmlItem => {
    const exist = this.properties.find(property => property.uuid === propertyUUID)
    if(!exist) throw new Error(`${this.className}.setNewValueByPropertyUUID(${this.uuid}): не найдено property с uuid=${propertyUUID}`)

    this.properties = this.properties.map( property => {
      if( property.uuid !== propertyUUID ) return property
      return property.setNewValue(valueUUID, value)
    })
    return this
  }

  public toggleActiveArgumentCount = (id: cssPropertyID, index: number) => {
    this.properties = this.properties.map( property => {
      if (property.id !== id) return property
      return property.toggleActiveArgumentCount(index)
    })
    return this
  }

  public toggleActiveArgumentCountByUUID = (uuid: string, count: number) => {
    this.properties = this.properties.map( property => {
      if (property.uuid !== uuid) return property
      return property.toggleActiveArgumentCount(count)
    })
    return this
  }

  public getProppertyByUUID = (uuid: string) : cssProperty => {
    const property = this.properties.find(item => item.uuid === uuid)
    if (typeof property === 'undefined') throw new Error('Property not found')
    return property
  }

  public getPropertyById = (id: cssPropertyID) : cssProperty => {
    const property = this.properties.find(item => item.id === id)
    if(typeof property === 'undefined') throw new Error('свйоство с указнным id не найдено')
    return property
  }

  public backgroundColor = () => {
    const property = this.properties.find(property => property.id === cssPropertyID.backgroundColor)
    if(typeof property === 'undefined') return '0'

    return property.style
  }

  public addPropertyByIdAndReturnProperty = (id: cssPropertyID): cssProperty => {
    return new cssProperty(id)
  }

  public addPropertyById = (id: cssPropertyID) => {
    this.properties = this.properties.concat( new cssProperty(id) )
    return this
  }

  public delPropertyById = (id: cssPropertyID) => {
    this.properties = this.properties.filter(property => property.id !== id)
    return this
  }

  public delPropertyByUUID = (uuid: string) => {
    this.properties = this.properties.filter(property => property.uuid !== uuid)
    return this
  }

  public hasPropertyById = (id: cssPropertyID): boolean => {
    return this.properties.map(property => property.id).includes(id)
  }

  public applyPreset = (preset: defaultHtmlItemConstructorObject) => {
    this.properties = preset.properties
    return this
  }

  public html = ( state: readonly HtmlItem[] ) => {
    const child = state.filter( item => item.parent === this.uuid )
    const childContent = child.length === 0 ? <></> : child.map(item => item.html(state) )
    return (
      <div className='workspace__item'
           key={this.uuid}
           style={this.style}>
        {childContent}
      </div>
    )
  }

}