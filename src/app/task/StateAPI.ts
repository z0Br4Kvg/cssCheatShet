import * as React from "react";
import {defaultBaseHtmlItem, defaultHtmlItem, defaultHtmlItemConstructorObject} from "../data/defaults/defaultHtmlItem";
import {HtmlItem} from "../data/htmlItem";
import {cssProperty} from "../data/cssProperty";
import {cssPropertyID} from "../data/raw/dataProperties";
const _ = require('lodash')

export class StateAPI {
  state: HtmlItem[]
  onChange: React.Dispatch<React.SetStateAction<HtmlItem[]>>
  className = 'StateApi'

  constructor(state: HtmlItem[], onChange: React.Dispatch<React.SetStateAction<HtmlItem[]>> ) {
    this.state = state
    this.onChange = onChange
  }

  // найти элемент по uuid,
  // узнать на каком уровне вложенности [level] он находится
  // переключить для него isSelect,
  // а для все остальны элементов на том же уровне вложенности [level] - сбросить
  // если элемент несуществует !exist - выбросить исключение
  public toggleIsSelectItemInLevelByUUIDAndResetOther = (uuid: string): void => {
    const exist = this.state.find(item => item.uuid === uuid)
    if(!exist) throw new Error(`StateAPI.selectItemByUUIDAndResetOther(): не найден элемент с uuid=${uuid}`)

    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => {
        if(item.level === exist.level){
          if(item.uuid === uuid) {
            return item.toggleIsSelect()
          } else if(item.uuid !== uuid) {
            return item.resetSelect()
          }
        } else {
          return item
        }
      })
    })
  }

  public toggleIsSelectByUUID = (uuid: string) : void => {
    const exist = this.state.find(item => item.uuid === uuid)
    if(!exist) throw new Error(`StateAPI.toggleIsSelectByUUID(): не найден элемент с uuid=${uuid}`)

    this.onChange(prev => {
      return _.cloneDeep(prev).map((item: HtmlItem) => item.uuid === uuid ? item.toggleIsSelect() : item.resetSelect() )
    })
  }

  // найти элемент по uuid,
  // переключить для него isSelect,
  // если элемент несуществует !exist - выбросить исключение
  public toggleIsSelectItemByUUID = (uuid: string): void => {
    const exist = this.state.find(item => item.uuid === uuid)
    if(!exist) throw new Error(`StateAPI.selectItemByUUIDAndResetOther(): не найден элемент с uuid=${uuid}`)

    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => {
        if(item.uuid === uuid) {
          return item.toggleIsSelect()
        }
      })
    })
  }

  // переключить количество выбранных аргументов для property
  public toggleArgumentCount = (htmlItemUUID: string, propertyUUID: string, argCount: number) : void => {
    const exist = this.state.find( item => item.uuid === htmlItemUUID )
    if(!exist) throw new Error(`StateAPI.toggleArgumentCount(): не найден элемент с uuid=${htmlItemUUID}`)

    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => {
        if (item.uuid === htmlItemUUID) {
          return item.toggleActiveArgumentCountByUUID(propertyUUID, argCount)
        }
        return item
      })
    })
  }

  public setValue = (htmlItemUUID: string) => (propertyUUID: string) => (valueUUID: string, value: any): void => {
    const exist = this.state.find( item => item.uuid === htmlItemUUID )
    if(!exist) throw new Error(`StateAPI.setValue(): не найден элемент с uuid=${htmlItemUUID}`)

    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => {
        if(item.uuid === htmlItemUUID) {
          return item.setNewValueByPropertyUUID(propertyUUID, valueUUID, value)
        } else {
          return item
        }
      })
    })

  }

  // вернуть UUID элементов по уровню вложенности [level]
  // если элементов не найдено - вернуть '0'
  public getItemsUUIDsByLevel = (level: number): string[] | '0' => {
    const ans = this.state.filter(item => item.level === level).map(item => item.uuid)
    if (typeof ans === 'undefined') return '0'
    return ans
  }

  // вернуть UUID элементов у которых установлен isSelect по уровню вложенности [level]
  // если элементов не найдено - вернуть '0'
  public getSelectedItemsUUIDsByLevel = (level: number): string[] | '0' => {
    const ans = this.state
      .filter(item => item.level === level)
      .filter(item => item.isSelect === true)
      .map(item => item.uuid)
    if(typeof ans === 'undefined') return '0'
    return ans
  }

  public getItemByUUID = (uuid: string) => {
    const ans = this.state.find(item => item.uuid === uuid)
    if (typeof ans === 'undefined') throw new Error(`Элемент не найден по UUID=${uuid}`)
    return ans
  }

  public addItemByParent = (parent: string): void => {
    const level = parent === 'workspace' ? 1 : this.getItemByUUID(parent).level + 1
    this.onChange( prev => {
      return prev.concat( new HtmlItem(new defaultBaseHtmlItem('random'), level, parent, false) )
    })
  }

  public addPropertyByHtmlItemUUIDAndPropertyId = (uuid: string, id: cssPropertyID) => {
    this.onChange( prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => item.uuid === uuid ? item.addPropertyById(id) : item )
    })
  }

  public getPropsWorkspace = () => {
    return this.state.filter( item => item.level === 0 ).map( item => item.html(this.state) )
  }

  public getFirstSelectedItem = () : HtmlItem | '0' => {
    const ans = this.state.find( item => item.isSelect )
    if (typeof ans === 'undefined') return '0'
    return ans
  }

  public getItemsByParent = (parent: string): HtmlItem[] | '0' => {
    const ans = this.state.filter(item => item.parent === parent)
    if (ans.length === 0) return '0'
    return ans
  }

  public getItemsUUIDsByParent = (parent: string): string[] | '0' => {
    const items = this.getItemsByParent(parent)
    if(items === '0') return '0'
    return items.map(item => item.uuid)
  }

  public isSelectedByUUID = (uuid: string) : boolean => {
    const ans = this.getItemByUUID(uuid)
    return ans.isSelect
  }

  public getSelectedItemsUUIDsByParent = (parent: string): string[] | '0' => {
    const items = this.getItemsByParent(parent)
    if(items === '0') return '0'

    const ans = items.filter(item => item.isSelect)
    if(typeof ans === 'undefined') return '0'

    return ans.map(item => item.uuid)
  }

  public getParentUUIDByUUID = (uuid: string) : string => {
    const ans = this.state.find(item => item.uuid === uuid)
    if (typeof ans === 'undefined') return '0'
    return ans.parent
  }

  public getLevelByUUID = (uuid: string) => {
    return this.getItemByUUID(uuid).level
  }

  public getPropertyByHtmiItemUUIDandPropertyUUID = (htmlItemUUID: string, propertyUUID: string) : cssProperty => {
    return this.getItemByUUID(htmlItemUUID).getProppertyByUUID(propertyUUID)
  }

  public getBgColorByHtmlItemUUID = (uuid: string) => {
    return this.getItemByUUID(uuid).backgroundColor()
  }

  public getPropertiesUUIDAndTitleAndIsSelectByHtmlItemUUID = (uuid: string) => {
    return this.getItemByUUID(uuid).getPropertiesUUIDAndTitleAndIsSelect()
  }

  public toggleIsSelectPropertyByHtmlItemUUID = (htmlItemUUID: string, propertyUUID: string) => {
    this.getItemByUUID(htmlItemUUID)
    this.onChange(prev => {
      return _.cloneDeep(prev).map((item: HtmlItem) => {
        if(item.uuid === htmlItemUUID) {
          return item.togglePropertyIsSelectByUUID(propertyUUID)
        }
        return item
      })
    })
  }

  // уадаляем элменеты на заданном уровне вложенности [level],
  // у которых установлен isSelect
  public delSelectedItemsNyLevel = (level: number): void => {
    this.onChange(prev => {
      return _.cloneDeep(prev).filter( (item: HtmlItem) => ((item.level === level) && !item.isSelect) )
    })
  }

  //удаляем элемент по UUID
  public delItemByUUID = (uuid: string): void => {
    this.onChange( prev => {
      return _.cloneDeep(prev).filter( (item: HtmlItem) => item.uuid !== uuid )
    })
  }

  public delAllItemByLevel = (level: number) : void => {
    this.onChange(prev => {
      return _.cloneDeep(prev).filter( (item: HtmlItem) => item.level !== level )
    })
  }

  public delPropertyByHtmlItemUUIDAndPropertyUUID = (htmlItemUUID: string, propertyUUID: string) => {
    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => item.uuid === htmlItemUUID ? item.delPropertyByUUID(propertyUUID) : item )
    })
  }

  public delPropertyByHtmlItemUUIDAndPropertyId = (htmlItemUUID: string, propertyID: cssPropertyID) => {
    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => item.uuid === htmlItemUUID ? item.delPropertyById(propertyID) : item )
    })
  }

  public getPropertiesByItemUUID = (uuid: string): cssProperty[] =>  {
    return this.getItemByUUID(uuid).properties
  }

  public getPropertiesIDByItemUUID = (uuid: string): cssPropertyID[] =>  {
    return this.getItemByUUID(uuid).properties.map(item => item.id)
  }

  // если в HtmlITem уже есть свойство входящее в PropertyIDS, то ничего с ним не делаем,
  // если такого свойства нет - добавляем
  // елис в PropertyIDS есть свойство которого нет HTMLItem - удаляем его из HTMLItem
  public updatePropertiesByItemUUIDAndPropertyIDS = (htmlItemUUID: string, propertyIDS: cssPropertyID[]) => {
    const item = this.getItemByUUID(htmlItemUUID)

    for(let id of propertyIDS) {
      if(item.hasPropertyById(id)) continue
      if(!item.hasPropertyById(id)) {
        this.addPropertyByHtmlItemUUIDAndPropertyId(htmlItemUUID, id)
      }
    }

    for(let id of item.properties.map(item => item.id)) {
      if(!propertyIDS.includes(id)) {
        this.delPropertyByHtmlItemUUIDAndPropertyId(htmlItemUUID, id)
      }
    }


    // this.onChange( prev => {
    //   return _.cloneDeep(prev).map( (item: HtmlItem) => {
    //     if (item.uuid === htmlItemUUID) {
    //       item.properties = propertyIDS.map( id => {
    //         return item.hasPropertyById(id) ? item.getPropertyById(id) : new cssProperty(id)
    //       })
    //
    //       return item
    //     }
    //     return item
    //   })
    // })

  }

  public applyPresetByItemUUIDAndPreset = (uuid: string, preset: defaultHtmlItemConstructorObject) => {
    const item =  this.getItemByUUID(uuid)
    const {level, parent, isSelect} = item
    this.onChange(prev => {
      return _.cloneDeep(prev).map( (item: HtmlItem) => item.uuid === uuid ? item.applyPreset(preset) : item )
    })
  }

}