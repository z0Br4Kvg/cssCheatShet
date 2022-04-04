import {child, ChildPropertiesUtil, cssProperty, cssPropertyStatic} from "../DATA/cssProperty";
import {cssPropertyID} from "../DATA/dataProperties";
import {cssValueID} from "../DATA/dataValues";
import {cssValue} from "../DATA/cssValue";

export enum pageID {
  flex,
  test
}
export type grouping = {
  title: string,
  propertiesID: cssPropertyID[]
}
interface iPage {
  id: pageID
  title: string
  default: boolean
  property: {
    self: cssProperty[]
    child: child[]
    groupingChild?: grouping[]

  }
}


export class Pages {
  static pagesList_: iPage[] = [
    {
      id: pageID.flex,
      title: 'Flex',
      default: false,
      property: {
        groupingChild: [],
        self: [
          new cssProperty(
            cssPropertyID.display,
            cssPropertyStatic.valuesOnly(cssPropertyID.display, [cssValueID.block, cssValueID.flex]),
            new cssValue( cssValueID.flex )
          ),
          new cssProperty(
            cssPropertyID.flex_direction,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.flex_direction),
            new cssValue( cssValueID.row )
          ),
          new cssProperty(
            cssPropertyID.justify_content,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.justify_content),
            new cssValue( cssValueID.flex_start )
          ),
          new cssProperty(
            cssPropertyID.align_items,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.align_items),
            new cssValue( cssValueID.flex_start )
          ),
          new cssProperty(
            cssPropertyID.flex_wrap,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.flex_wrap),
            new cssValue( cssValueID.unset )
          ),
          new cssProperty(
            cssPropertyID.align_content,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.align_content),
            new cssValue( cssValueID.unset )
          ),
        ],
        child: ChildPropertiesUtil.getState(2, [
          new cssProperty(
            cssPropertyID.width,
            cssPropertyStatic.valuesOnly(cssPropertyID.width, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.px, '75' )
          ),
          new cssProperty(
            cssPropertyID.height,
            cssPropertyStatic.valuesOnly(cssPropertyID.height, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.px, '50')
          ),
          new cssProperty(
            cssPropertyID.align_self,
            cssPropertyStatic.valuesWithUnsetOnly(cssPropertyID.align_self),
            new cssValue( cssValueID.unset )
          ),
        ]),
      }
    },
    {
      id: pageID.test,
      title: 'Border-box',
      default: true,
      property: {
        groupingChild:  [
          {
            title: ' ',
            propertiesID: [cssPropertyID.box_sizing],
          },
          {
            title: 'Width & Height',
            propertiesID: [cssPropertyID.width, cssPropertyID.height],
          },
          {
            title: 'Padding',
            propertiesID: [cssPropertyID.padding_top, cssPropertyID.padding_right, cssPropertyID.padding_bottom, cssPropertyID.padding_left],
          },
          {
            title: 'Margin',
            propertiesID: [cssPropertyID.margin_top, cssPropertyID.margin_right, cssPropertyID.margin_bottom, cssPropertyID.margin_left],
          },
        ],
        self: [
          new cssProperty(
            cssPropertyID.display,
            cssPropertyStatic.values(cssPropertyID.display),
            new cssValue( cssValueID.block )
          ),
          new cssProperty(
            cssPropertyID.min_width,
            cssPropertyStatic.valuesOnly(cssPropertyID.min_width, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset )
          ),
          new cssProperty(
            cssPropertyID.max_width,
            cssPropertyStatic.valuesOnly(cssPropertyID.max_width, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset )
          ),
          new cssProperty(
            cssPropertyID.width,
            cssPropertyStatic.valuesOnly(cssPropertyID.width, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.auto )
          ),
          new cssProperty(
            cssPropertyID.min_height,
            cssPropertyStatic.valuesOnly(cssPropertyID.min_height, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset )
          ),
          new cssProperty(
            cssPropertyID.max_height,
            cssPropertyStatic.valuesOnly(cssPropertyID.max_height, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset )
          ),
          new cssProperty(
            cssPropertyID.height,
            cssPropertyStatic.valuesOnly(cssPropertyID.height, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.auto )
          ),

        ],
        child: ChildPropertiesUtil.getState(2, [
          new cssProperty(
            cssPropertyID.box_sizing,
            cssPropertyStatic.values(cssPropertyID.box_sizing),
            new cssValue( cssValueID.border_box )
          ),
          new cssProperty(
            cssPropertyID.width,
            cssPropertyStatic.valuesOnly(cssPropertyID.width, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.px, '75' )
          ),
          new cssProperty(
            cssPropertyID.height,
            cssPropertyStatic.valuesOnly(cssPropertyID.height, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.px, '50')
          ),
          new cssProperty(
            cssPropertyID.margin_top,
            cssPropertyStatic.valuesOnly(cssPropertyID.margin_top, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.margin_right,
            cssPropertyStatic.valuesOnly(cssPropertyID.margin_right, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.margin_bottom,
            cssPropertyStatic.valuesOnly(cssPropertyID.margin_bottom, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.margin_left,
            cssPropertyStatic.valuesOnly(cssPropertyID.margin_left, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.padding_top,
            cssPropertyStatic.valuesOnly(cssPropertyID.padding_top, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.padding_right,
            cssPropertyStatic.valuesOnly(cssPropertyID.padding_right, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.padding_bottom,
            cssPropertyStatic.valuesOnly(cssPropertyID.padding_bottom, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
          new cssProperty(
            cssPropertyID.padding_left,
            cssPropertyStatic.valuesOnly(cssPropertyID.padding_left, [cssValueID.px, cssValueID.percentage, cssValueID.auto, cssValueID.unset]),
            new cssValue( cssValueID.unset)
          ),
        ]),
      }
    },

  ]

  static getPageById(id: pageID): iPage {
    return Pages.pagesList_.filter(page => page.id === id )[0]
  }

  static get getDefaultPageId(): pageID {
    return Pages.pagesList_.filter(page => page.default === true )[0].id
  }

  static get pagesList(): iPage[] {
    return Pages.pagesList_
  }
}