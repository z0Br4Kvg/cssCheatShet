import {cssValueID, iCSSValue} from "./dataValues";
import {cssValueStatic} from "./cssValue";

export enum cssPropertyID {
  text_transform,
  flex_direction,
  flex_wrap,
  justify_content,
  align_items,
  width,
  display,
  align_content,
  height,
  flex_basis,
  gap,
  row_gap,
  column_gap,
  flex_grow,
  flex_shrink,
  align_self,
  padding_top,
  padding_right,
  padding_bottom,
  padding_left,
  margin_top,
  margin_right,
  margin_bottom,
  margin_left,
  box_sizing,
  min_width,
  min_height,
  max_width,
  max_height,
}

export interface iCSSProperty {
  id: cssPropertyID,
  title: string,
  react: string,
  values: iCSSValue[]
}

const cssDisplay: iCSSProperty[] = [
  {
    id: cssPropertyID.display,
    title: 'display',
    react: 'display',
    values: [
      cssValueStatic.cssValue(cssValueID.flex),
      cssValueStatic.cssValue(cssValueID.block),
      cssValueStatic.cssValue(cssValueID.inline),
      cssValueStatic.cssValue(cssValueID.grid),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssAlignContent: iCSSProperty[] = [
  {
    id: cssPropertyID.align_content,
    title: 'align-content',
    react: 'alignContent',
    values: [
      cssValueStatic.cssValue(cssValueID.flex_start),
      cssValueStatic.cssValue(cssValueID.flex_end),
      cssValueStatic.cssValue(cssValueID.center),
      cssValueStatic.cssValue(cssValueID.start),
      cssValueStatic.cssValue(cssValueID.end),
      cssValueStatic.cssValue(cssValueID.normal),
      cssValueStatic.cssValue(cssValueID.baseline),
      cssValueStatic.cssValue(cssValueID.first_baseline),
      cssValueStatic.cssValue(cssValueID.last_baseline),
      cssValueStatic.cssValue(cssValueID.space_between),
      cssValueStatic.cssValue(cssValueID.space_around),
      cssValueStatic.cssValue(cssValueID.space_evenly),
      cssValueStatic.cssValue(cssValueID.stretch),
      cssValueStatic.cssValue(cssValueID.safe_center),
      cssValueStatic.cssValue(cssValueID.unsafe_center),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]
const cssAlignItems: iCSSProperty[] = [
  {
    id: cssPropertyID.align_items,
    title: 'align-items',
    react: 'alignItems',
    values: [
      cssValueStatic.cssValue(cssValueID.flex_start),
      cssValueStatic.cssValue(cssValueID.flex_end),
      cssValueStatic.cssValue(cssValueID.center),
      cssValueStatic.cssValue(cssValueID.baseline),
      cssValueStatic.cssValue(cssValueID.stretch),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssFlexDirection: iCSSProperty[] = [
  {
    id: cssPropertyID.flex_direction,
    title: 'flex-direction',
    react: 'flexDirection',
    values: [
      cssValueStatic.cssValue(cssValueID.row),
      cssValueStatic.cssValue(cssValueID.row_reverse),
      cssValueStatic.cssValue(cssValueID.column),
      cssValueStatic.cssValue(cssValueID.column_reverse),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssJustifyContent: iCSSProperty[] = [
  {
    id: cssPropertyID.justify_content,
    title: 'justify-content',
    react: 'justifyContent',
    values: [
      cssValueStatic.cssValue(cssValueID.flex_start),
      cssValueStatic.cssValue(cssValueID.flex_end),
      cssValueStatic.cssValue(cssValueID.center),
      cssValueStatic.cssValue(cssValueID.space_between),
      cssValueStatic.cssValue(cssValueID.space_around),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssFlexWrap: iCSSProperty[] = [
  {
    id: cssPropertyID.flex_wrap,
    title: 'flex-wrap',
    react: 'flexWrap',
    values: [
      cssValueStatic.cssValue(cssValueID.nowrap),
      cssValueStatic.cssValue(cssValueID.wrap),
      cssValueStatic.cssValue(cssValueID.wrap_reverse),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssWidth: iCSSProperty[] = [
  {
    id: cssPropertyID.width,
    title: 'width',
    react: 'width',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssMinWidth: iCSSProperty[] = [
  {
    id: cssPropertyID.min_width,
    title: 'min-width',
    react: 'minWidth',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssMaxWidth: iCSSProperty[] = [
  {
    id: cssPropertyID.max_width,
    title: 'max-width',
    react: 'maxWidth',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssHeight: iCSSProperty[] = [
  {
    id: cssPropertyID.height,
    title: 'height',
    react: 'height',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssMinHeight: iCSSProperty[] = [
  {
    id: cssPropertyID.min_height,
    title: 'min-height',
    react: 'minHeight',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssMaxHeight: iCSSProperty[] = [
  {
    id: cssPropertyID.max_height,
    title: 'max-height',
    react: 'maxHeight',
    values: [
      cssValueStatic.cssValue(cssValueID.px),
      cssValueStatic.cssValue(cssValueID.em),
      cssValueStatic.cssValue(cssValueID.rem),
      cssValueStatic.cssValue(cssValueID.vh),
      cssValueStatic.cssValue(cssValueID.vw),
      cssValueStatic.cssValue(cssValueID.vmin),
      cssValueStatic.cssValue(cssValueID.vmax),
      cssValueStatic.cssValue(cssValueID.percentage),
      cssValueStatic.cssValue(cssValueID.auto),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssAlignSelf: iCSSProperty[] = [
  {
    id: cssPropertyID.align_self,
    title: 'align-self',
    react: 'alignSelf',
    values: [
      cssValueStatic.cssValue(cssValueID.auto),
      cssValueStatic.cssValue(cssValueID.normal),
      cssValueStatic.cssValue(cssValueID.center),
      cssValueStatic.cssValue(cssValueID.start),
      cssValueStatic.cssValue(cssValueID.end),
      cssValueStatic.cssValue(cssValueID.self_start),
      cssValueStatic.cssValue(cssValueID.self_end),
      cssValueStatic.cssValue(cssValueID.baseline),
      cssValueStatic.cssValue(cssValueID.first_baseline),
      cssValueStatic.cssValue(cssValueID.last_baseline),
      cssValueStatic.cssValue(cssValueID.stretch),
      cssValueStatic.cssValue(cssValueID.safe_center),
      cssValueStatic.cssValue(cssValueID.unsafe_center),
    ].concat(cssValueStatic.cssGlobalValues())
  },
]

const cssPaddingTop: iCSSProperty[] = [
  {
    id: cssPropertyID.padding_top,
    title: 'padding-top',
    react: 'paddingTop',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]
const cssPaddingRight: iCSSProperty[] = [
  {
    id: cssPropertyID.padding_right,
    title: 'padding-right',
    react: 'paddingRight',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssPaddingBottom: iCSSProperty[] = [
  {
    id: cssPropertyID.padding_bottom,
    title: 'padding-bottom',
    react: 'paddingBottom',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssPaddingLeft: iCSSProperty[] = [
  {
    id: cssPropertyID.padding_left,
    title: 'padding-left',
    react: 'paddingLeft',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssMarginTop: iCSSProperty[] = [
  {
    id: cssPropertyID.margin_top,
    title: 'margin-top',
    react: 'marginTop',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]
const cssMarginRight: iCSSProperty[] = [
  {
    id: cssPropertyID.margin_right,
    title: 'margin-right',
    react: 'marginRight',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssMarginBottom: iCSSProperty[] = [
  {
    id: cssPropertyID.margin_bottom,
    title: 'margin-bottom',
    react: 'marginBottom',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssMarginLeft: iCSSProperty[] = [
  {
    id: cssPropertyID.margin_left,
    title: 'margin-left',
    react: 'marginLeft',
    values: [
      ...cssValueStatic.cssLengthValues(),
      cssValueStatic.cssValue(cssValueID.auto),
      ...cssValueStatic.cssGlobalValues(),
    ]
  },
]

const cssBoxSizing: iCSSProperty[] = [
  {
    id: cssPropertyID.box_sizing,
    title: 'box-sizing',
    react: 'boxSizing',
    values: [
      cssValueStatic.cssValue( cssValueID.border_box ),
      cssValueStatic.cssValue( cssValueID.content_box ),
    ]
  },
]



export const CSS_PROPERTIES: iCSSProperty[] = [
  ...cssDisplay,
  ...cssAlignContent,
  ...cssAlignItems,
  ...cssFlexDirection,
  ...cssJustifyContent,
  ...cssJustifyContent,
  ...cssFlexWrap,
  ...cssWidth,
  ...cssMinWidth,
  ...cssMaxWidth,
  ...cssHeight,
  ...cssMinHeight,
  ...cssMaxHeight,
  ...cssAlignSelf,
  ...cssPaddingTop,
  ...cssPaddingRight,
  ...cssPaddingBottom,
  ...cssPaddingLeft,
  ...cssMarginTop,
  ...cssMarginRight,
  ...cssMarginBottom,
  ...cssMarginLeft,
  ...cssBoxSizing,
]