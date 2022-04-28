import {cssPropertyID, PROPERITES_API} from "../raw/dataProperties";
import {cssValue, cssValueAncestor, cssValueColor, cssValueKeyword, cssValueLength} from "../cssValue";
import {cssValueID} from "../raw/dataValues";
import {prefetch} from "webpack";

export interface propertyConstructorObjectArgs {
  values: cssValueAncestor[] | cssValueLength[] | cssValueKeyword[] | cssValueColor[]
}

export interface propertyConstructorObjectArguments {
  count: number,
  active: boolean,
  args: propertyConstructorObjectArgs[]
}

export interface propertyConstructorObject {
  id: cssPropertyID,
  arguments: propertyConstructorObjectArguments[]
}

export class defaultWidth implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.width
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.px, true)(50),
              new cssValue(cssValueID.percentage)(100),
              new cssValue(cssValueID.auto),
              new cssValue(cssValueID.unset),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultMinWidth implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.min_width
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.px, true)(960),
              new cssValue(cssValueID.percentage)(100),
              new cssValue(cssValueID.auto),
              new cssValue(cssValueID.unset),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultMaxWidth implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.max_width
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.px, true)(960),
              new cssValue(cssValueID.percentage)(100),
              new cssValue(cssValueID.auto),
              new cssValue(cssValueID.unset),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultWidth100 implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.width
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.px)(150),
              new cssValue(cssValueID.percentage, true)(100),
              new cssValue(cssValueID.auto),
              new cssValue(cssValueID.unset),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultHeight implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.height
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(50), new cssValue(cssValueID.percentage)(25), new cssValue(cssValueID.auto), new cssValue(cssValueID.unset),]
          },
        ],
      },
    ]
  }
}

export class defaultHeight350 implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.height
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(350), new cssValue(cssValueID.percentage)(25), new cssValue(cssValueID.auto), new cssValue(cssValueID.unset),]
          },
        ],
      },
    ]
  }
}

export class defaultMinHeight implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.min_height
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(350), new cssValue(cssValueID.percentage)(25), new cssValue(cssValueID.auto), new cssValue(cssValueID.unset),]
          },
        ],
      },
    ]
  }
}

export class defaultMaxHeight implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.max_height
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(350), new cssValue(cssValueID.percentage)(25), new cssValue(cssValueID.auto), new cssValue(cssValueID.unset),]
          },
        ],
      },
    ]
  }
}

export class defaultHeight100 implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.height
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px)(25), new cssValue(cssValueID.percentage,true)(100), new cssValue(cssValueID.auto), new cssValue(cssValueID.unset),]
          },
        ],
      },
    ]
  }
}

export class defaultPadding implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.padding
    this.arguments = [
      {
        count: 1,
        active: false,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
        ],
      },
      {
        count: 4,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          }

        ],
      },
    ]
  }
}

export class defaultMargin implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.margin
    this.arguments = [
      {
        count: 1,
        active: false,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
        ],
      },
      {
        count: 4,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(0), new cssValue(cssValueID.percentage)(10),]
          }

        ],
      },
    ]
  }
}

export class defaultBorder implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.border
    this.arguments = [
      {
        count: 1,
        active: false,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.unset, true),]
          },
        ],
      },
      {
        count: 3,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.px, true)(1), new cssValue(cssValueID.thin), new cssValue(cssValueID.medium), new cssValue(cssValueID.thick),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.none), new cssValue(cssValueID.dashed), new cssValue(cssValueID.solid, true), new cssValue(cssValueID.hidden),]
          },
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.rgba, true)('#e9ecef')]
          }
        ],
      },
    ]
  }
}

export class defaultBackground implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor(color: 'red' | 'random' | 'green' | 'grey' = 'random') {
    let colorValue = color === 'red' ? '#e66465' : '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    colorValue = color === 'grey' ? '#f8f9fa' : colorValue
    this.id = cssPropertyID.backgroundColor
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [new cssValue(cssValueID.rgba, true)(colorValue)]
          },
        ],
      },
    ]
  }
}

export class defaultDisplay implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor(keyword: 'block' | 'flex' | 'inline' | 'none' | 'unset' = 'unset') {

    const block = keyword === 'block'
    const flex = keyword === 'flex'
    const inline = keyword === 'inline'
    const none = keyword === 'none'
    let unset = keyword === 'unset'
    this.id = cssPropertyID.display
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.block, block),
              new cssValue(cssValueID.flex, flex),
              new cssValue(cssValueID.inline, inline),
              new cssValue(cssValueID.none, none),
              new cssValue(cssValueID.unset, unset),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultFlexDirection implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.flex_direction
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.row, true),
              new cssValue(cssValueID.column),
              new cssValue(cssValueID.row_reverse),
              new cssValue(cssValueID.column_reverse),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultFlexWrap implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.flex_wrap
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.wrap),
              new cssValue(cssValueID.wrap_reverse),
              new cssValue(cssValueID.nowrap),
              new cssValue(cssValueID.unset, true),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultJustifyContent implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.justify_content
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.flex_start),
              new cssValue(cssValueID.flex_end),
              new cssValue(cssValueID.center),
              new cssValue(cssValueID.space_between),
              new cssValue(cssValueID.space_around),
              new cssValue(cssValueID.unset, true),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultAlignItems implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.align_items
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.flex_start),
              new cssValue(cssValueID.flex_end),
              new cssValue(cssValueID.center),
              new cssValue(cssValueID.baseline),
              new cssValue(cssValueID.stretch),
              new cssValue(cssValueID.unset, true),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultAlignContent implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.align_content
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.flex_start),
              new cssValue(cssValueID.flex_end),
              new cssValue(cssValueID.center),
              new cssValue(cssValueID.space_between),
              new cssValue(cssValueID.space_around),
              new cssValue(cssValueID.stretch),
              new cssValue(cssValueID.unset, true),
            ]
          },
        ],
      },
    ]
  }
}

export class defaultAlignSelf implements propertyConstructorObject {
  id: cssPropertyID
  arguments: propertyConstructorObjectArguments[]
  constructor() {
    this.id = cssPropertyID.align_self
    this.arguments = [
      {
        count: 1,
        active: true,
        args: [
          {
            // @ts-ignore
            values: [
              new cssValue(cssValueID.auto),
              new cssValue(cssValueID.flex_start),
              new cssValue(cssValueID.flex_end),
              new cssValue(cssValueID.center),
              new cssValue(cssValueID.baseline),
              new cssValue(cssValueID.stretch),
              new cssValue(cssValueID.unset, true),
            ]
          },
        ],
      },
    ]
  }
}

export const defaultProperty = {
  width: defaultWidth,
  minWidth: defaultMinWidth,
  maxWidth: defaultMaxWidth,
  width100: defaultWidth100,
  height: defaultHeight,
  height350: defaultHeight350,
  minHeight: defaultMinHeight,
  maxHeight: defaultMaxHeight,
  height100: defaultHeight100,
  padding: defaultPadding,
  margin: defaultMargin,
  border: defaultBorder,
  bg: defaultBackground,
  display: defaultDisplay,
  flex_direction: defaultFlexDirection,
  flex_wrap: defaultFlexWrap,
  justify_content: defaultJustifyContent,
  align_items: defaultAlignItems,
  align_content: defaultAlignContent,
  align_self: defaultAlignSelf,
}

export class DefaultPropertyAPI {
  static properties = Object.values(defaultProperty).map(item => new item())
  static _properties = defaultProperty

  static getIDS = (): cssPropertyID[] => {
    return this.properties.map( item => item.id )
  }

  static getIDSandTitle = () : {title: string, id: cssPropertyID}[] => {
    const ans = this.properties.map(item => {
      return {
        id: item.id,
        title: PROPERITES_API.getTitleByID(item.id)
      }
    })
    const count = (id: cssPropertyID, properties: {id: cssPropertyID, title: string}[] | any[]) => {
      if (properties.length === 0) return 0
      return properties.filter( property => property.id === id).length
    }

    const getUnique = (arr: {id: cssPropertyID, title: string}[]) => {
      let ans: any = []
      arr.forEach(item => {
        if ( count(item.id, ans) === 0 ) {
          ans.push(item)
        }
      })
      return ans
    }

    return getUnique(ans)
  }

  static getById = (id: cssPropertyID) => {
    const property = this.properties.find(property => property.id === id)
    if(typeof property === 'undefined') throw new Error('Нет property с указанным id')

    for(let key of Object.keys(this._properties)) {
      if((new this._properties[key]).id === id) return new this._properties[key]
    }
    //return property
  }
}