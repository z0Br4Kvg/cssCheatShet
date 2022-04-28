import {cssValueID, VALUES_API} from "./dataValues";
const _ = require('lodash')

export enum cssPropertyID {
  width,
  height,
  padding,
  margin,
  border,
  backgroundColor,
  display,
  flex_direction,
  flex_wrap,
  justify_content,
  align_items,
  align_content,
  align_self,
  min_width,
  max_width,
  min_height,
  max_height,
}

export interface dataPropertyArgs {
  hint: string,
  values: cssValueID[]
}

interface dataPropertyArguments {
  count: number,
  hint?: string,
  args: dataPropertyArgs[]
}

export interface dataProperty {
  id: cssPropertyID,
  title: string,
  react: string,
  arguments: dataPropertyArguments[]
}

const dataBackgroundColor: dataProperty[] = [
  {
    id: cssPropertyID.backgroundColor,
    title: 'background-color',
    react: 'backgroundColor',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: 'color',
            values: [...VALUES_API.color]
          }
        ]
      },
    ]
  }
]

const dataWidth: dataProperty[] = [
  {
    id: cssPropertyID.width,
    title: 'width',
    react: 'width',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.widthIDS, ...VALUES_API.global]
          }
        ]
      },
      {
        count: 2,
        hint: '',
        args: [
          {
            hint: 'width',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'box-sizing',
            values: [...VALUES_API.widthOptionalIDS]
          },
        ]
      },
    ]
  }
]

const dataMinWidth: dataProperty[] = [
  {
    id: cssPropertyID.min_width,
    title: 'min-width',
    react: 'minWidth',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.widthIDS, ...VALUES_API.global]
          }
        ]
      },
    ]
  }
]

const dataMaxWidth: dataProperty[] = [
  {
    id: cssPropertyID.max_width,
    title: 'max-width',
    react: 'maxWidth',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.widthIDS, ...VALUES_API.global]
          }
        ]
      },
    ]
  }
]


const dataMinHeight: dataProperty[] = [
  {
    id: cssPropertyID.min_height,
    title: 'min-height',
    react: 'minHeight',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.global]
          }
        ]
      },
    ]
  }
]

const dataMaxHeight: dataProperty[] = [
  {
    id: cssPropertyID.max_height,
    title: 'max-height',
    react: 'maxHeight',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.global]
          }
        ]
      },
    ]
  }
]

const dataHeight: dataProperty[] = [
  {
    id: cssPropertyID.height,
    title: 'height',
    react: 'height',
    arguments: [
      {
        count: 1,
        hint: '',
        args: [
          {
            hint: '',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.global]
          }
        ]
      },
    ]
  }
]

const dataPadding: dataProperty[] = [
  {
    id: cssPropertyID.padding,
    title: 'padding',
    react: 'padding',
    arguments: [
      {
        count: 1,
        hint: 'one value for top, right, bottom and left',
        args: [
          {
            hint: '',
            values: [...VALUES_API.global, ...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          }
        ]
      },
      {
        count: 2,
        hint: 'top, bottom & right, left',
        args: [
          {
            hint: 'top, bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right, left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      },
      {
        count: 3,
        hint: 'top & right, left & bottom',
        args: [
          {
            hint: 'top',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right, left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      },
      {
        count: 4,
        hint: 'top & right & left & bottom',
        args: [
          {
            hint: 'top',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      }
    ]
  }
]

const dataMargin: dataProperty[] = [
  {
    id: cssPropertyID.margin,
    title: 'margin',
    react: 'margin',
    arguments: [
      {
        count: 1,
        hint: 'one value for top, right, bottom and left',
        args: [
          {
            hint: '',
            values: [...VALUES_API.global, ...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          }
        ]
      },
      {
        count: 2,
        hint: 'top, bottom & right, left',
        args: [
          {
            hint: 'top, bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right, left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      },
      {
        count: 3,
        hint: 'top & right, left & bottom',
        args: [
          {
            hint: 'top',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right, left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      },
      {
        count: 4,
        hint: 'top & right & left & bottom',
        args: [
          {
            hint: 'top',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'right',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'bottom',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
          {
            hint: 'left',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          },
        ]
      }
    ]
  }
]

const dataBorder: dataProperty[] = [
  {
    id: cssPropertyID.border,
    title: 'border',
    react: 'border',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: 'width or style or color',
            values: [...VALUES_API.global, ...VALUES_API.borderStyleIDS, ...VALUES_API.borderWidthIDS, ...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS]
          }
        ]
      },
      {
        count: 3,
        args: [
          {
            hint: 'width',
            values: [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, ...VALUES_API.borderWidthIDS]
          },
          {
            hint: 'style',
            values: [...VALUES_API.borderStyleIDS]
          },
          {
            hint: 'color',
            values: [...VALUES_API.color]
          }
        ]
      },
    ]
  }
]

const dataFlexDirection: dataProperty[] = [
  {
    id: cssPropertyID.flex_direction,
    title: 'flex-direction',
    react: 'flexDirection',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.flexDirecitonIDS,
            ]
          }
        ]
      },
    ]
  }
]

const dataFlexWrap: dataProperty[] = [
  {
    id: cssPropertyID.flex_wrap,
    title: 'flex-wrap',
    react: 'flexWrap',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.flexWrapIDS,
            ]
          }
        ]
      },
    ]
  }
]

const dataJustifyContent: dataProperty[] = [
  {
    id: cssPropertyID.justify_content,
    title: 'justify-content',
    react: 'justifyContent',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.justifyContentIDS,
            ]
          }
        ]
      },
    ]
  }
]

const dataAlignItems: dataProperty[] = [
  {
    id: cssPropertyID.align_items,
    title: 'align-items',
    react: 'alignItems',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.getIDSByPropertyTitle('align-items')
            ]
          }
        ]
      },
    ]
  }
]

const dataAlignContent: dataProperty[] = [
  {
    id: cssPropertyID.align_content,
    title: 'align-content',
    react: 'alignContent',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.getIDSByPropertyTitle('align-content')
            ]
          }
        ]
      },
    ]
  }
]

const dataAlignSelf: dataProperty[] = [
  {
    id: cssPropertyID.align_self,
    title: 'align-self',
    react: 'alignSelf',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.getIDSByPropertyTitle('align-self')
            ]
          }
        ]
      },
    ]
  }
]

/*
const dataFlexFirection: dataProperty[] = [
  {
    id: cssPropertyID.border,
    title: 'flex-direction',
    react: 'flexDirection',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
            ]
          }
        ]
      },
    ]
  }
]
 */

const dataDisplay: dataProperty[] = [
  {
    id: cssPropertyID.display,
    title: 'display',
    react: 'display',
    arguments: [
      {
        count: 1,
        args: [
          {
            hint: '',
            values: [
              ...VALUES_API.global,
              ...VALUES_API.displayIDS,
            ]
          }
        ]
      },
    ]
  }
]

const PROPERTIES = [
  ...dataWidth,
  ...dataMinWidth,
  ...dataMaxWidth,
  ...dataHeight,
  ...dataMinHeight,
  ...dataMaxHeight,
  ...dataPadding,
  ...dataMargin,
  ...dataBorder,
  ...dataBackgroundColor,
  ...dataDisplay,
  ...dataFlexDirection,
  ...dataFlexWrap,
  ...dataJustifyContent,
  ...dataAlignItems,
  ...dataAlignContent,
  ...dataAlignSelf
]

export class PROPERITES_API {
  static all = PROPERTIES

  static getByID(id: cssPropertyID): dataProperty {
    return PROPERITES_API.all.filter( property => property.id === id )[0]
  }

  static getReactByID(id: cssPropertyID): string {
    return PROPERITES_API.all.filter( property => property.id === id )[0].react
  }

  static getTitleByID(id: cssPropertyID): string {
    return PROPERITES_API.all.filter( property => property.id === id )[0].title
  }
}