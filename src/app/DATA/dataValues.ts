export enum cssValueID {
  initial,
  inherit,
  unset,
  px,
  em,
  rem,
  vh,
  vw,
  vmin,
  vmax,
  percentage,
  flex,
  block,
  inline,
  grid,
  flex_start,
  flex_end,
  center,
  space_between,
  space_around,
  start,
  end,
  normal,
  baseline,
  first_baseline,
  last_baseline,
  space_evenly,
  stretch,
  safe_center,
  unsafe_center,
  fill,
  max_content,
  min_content,
  fit_content,
  content,
  auto,
  row,
  row_reverse,
  column,
  column_reverse,
  flex_grow,
  nowrap,
  wrap,
  wrap_reverse,
  self_start,
  self_end,
  content_box,
  border_box
}

export enum cssUnitTypesID {
  color,
  length,
  number,
  percentage,
  gradient,
  keyword
}

export enum cssValueTypeID {
  keyword,
  number
}

export interface iCSSValue {
  id: cssValueID,
  type: cssUnitTypesID,
  unit: string,
  need_unit: boolean,
  value: string | number,
  type_value: cssValueTypeID[],
}

const GlobalValues: iCSSValue[] = [
  {
    id: cssValueID.initial,
    type: cssUnitTypesID.keyword,
    unit: 'initial',
    need_unit: false,
    value: 'initial',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.inherit,
    type: cssUnitTypesID.keyword,
    unit: 'inherit',
    need_unit: false,
    value: 'inherit',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.unset,
    type: cssUnitTypesID.keyword,
    unit: 'unset',
    need_unit: false,
    value: 'unset',
    type_value: [cssValueTypeID.keyword],
  },
]

const LengthValues: iCSSValue[] = [
  {
    id: cssValueID.px,
    type: cssUnitTypesID.length,
    unit: 'px',
    need_unit: true,
    value: 25,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.em,
    type: cssUnitTypesID.length,
    unit: 'em',
    need_unit: true,
    value: 1,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.rem,
    type: cssUnitTypesID.length,
    unit: 'rem',
    need_unit: true,
    value: 1,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.vh,
    type: cssUnitTypesID.length,
    unit: 'vh',
    need_unit: true,
    value: 50,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.vw,
    type: cssUnitTypesID.length,
    unit: 'vw',
    need_unit: true,
    value: 50,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.vmin,
    type: cssUnitTypesID.length,
    unit: 'vmin',
    need_unit: true,
    value: 50,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.vmax,
    type: cssUnitTypesID.length,
    unit: 'vmax',
    need_unit: true,
    value: 50,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.percentage,
    type: cssUnitTypesID.percentage,
    unit: '%',
    need_unit: true,
    value: 100,
    type_value: [cssValueTypeID.number],
  }
]

const FlexValues: iCSSValue[] = [
  {
    id: cssValueID.self_start,
    type: cssUnitTypesID.keyword,
    unit: 'self-start',
    need_unit: false,
    value: 'self-start',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.self_end,
    type: cssUnitTypesID.keyword,
    unit: 'self-end',
    need_unit: false,
    value: 'self-end',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.flex_start,
    type: cssUnitTypesID.keyword,
    unit: 'flex-start',
    need_unit: false,
    value: 'flex-start',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.flex_end,
    type: cssUnitTypesID.keyword,
    unit: 'flex-end',
    need_unit: false,
    value: 'flex-end',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.center,
    type: cssUnitTypesID.keyword,
    unit: 'center',
    need_unit: false,
    value: 'center',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.space_between,
    type: cssUnitTypesID.keyword,
    unit: 'space-between',
    need_unit: false,
    value: 'space-between',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.space_around,
    type: cssUnitTypesID.keyword,
    unit: 'space-around',
    need_unit: false,
    value: 'space-around',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.start,
    type: cssUnitTypesID.keyword,
    unit: 'start',
    need_unit: false,
    value: 'start',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.end,
    type: cssUnitTypesID.keyword,
    unit: 'end',
    need_unit: false,
    value: 'end',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.normal,
    type: cssUnitTypesID.keyword,
    unit: 'normal',
    need_unit: false,
    value: 'normal',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.baseline,
    type: cssUnitTypesID.keyword,
    unit: 'baseline',
    need_unit: false,
    value: 'baseline',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.first_baseline,
    type: cssUnitTypesID.keyword,
    unit: 'first baseline',
    need_unit: false,
    value: 'first baseline',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.last_baseline,
    type: cssUnitTypesID.keyword,
    unit: 'last baseline',
    need_unit: false,
    value: 'last baseline',
    type_value: [cssValueTypeID.keyword],
  },
  //
  {
    id: cssValueID.space_between,
    type: cssUnitTypesID.keyword,
    unit: 'space-between',
    need_unit: false,
    value: 'space-between',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.space_around,
    type: cssUnitTypesID.keyword,
    unit: 'space-around',
    need_unit: false,
    value: 'space-around',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.space_evenly,
    type: cssUnitTypesID.keyword,
    unit: 'space-evenly',
    need_unit: false,
    value: 'space-evenly',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.stretch,
    type: cssUnitTypesID.keyword,
    unit: 'stretch',
    need_unit: false,
    value: 'stretch',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.safe_center,
    type: cssUnitTypesID.keyword,
    unit: 'safe center',
    need_unit: false,
    value: 'safe center',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.unsafe_center,
    type: cssUnitTypesID.keyword,
    unit: 'unsafe center',
    need_unit: false,
    value: 'unsafe center',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.fill,
    type: cssUnitTypesID.keyword,
    unit: 'fill',
    need_unit: false,
    value: 'fill',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.max_content,
    type: cssUnitTypesID.keyword,
    unit: 'max-content',
    need_unit: false,
    value: 'max-content',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.min_content,
    type: cssUnitTypesID.keyword,
    unit: 'min-content',
    need_unit: false,
    value: 'min-content',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.fit_content,
    type: cssUnitTypesID.keyword,
    unit: 'fit-content',
    need_unit: false,
    value: 'fit-content',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.content,
    type: cssUnitTypesID.keyword,
    unit: 'content',
    need_unit: false,
    value: 'content',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.auto,
    type: cssUnitTypesID.keyword,
    unit: 'auto',
    need_unit: false,
    value: 'auto',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.row,
    type: cssUnitTypesID.keyword,
    unit: 'row',
    need_unit: false,
    value: 'row',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.row_reverse,
    type: cssUnitTypesID.keyword,
    unit: 'row-reverse',
    need_unit: false,
    value: 'row-reverse',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.column,
    type: cssUnitTypesID.keyword,
    unit: 'column',
    need_unit: false,
    value: 'column',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.column_reverse,
    type: cssUnitTypesID.keyword,
    unit: 'column-reverse',
    need_unit: false,
    value: 'column-reverse',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.flex_grow,
    type: cssUnitTypesID.number,
    unit: 'flexGrow',
    need_unit: false,
    value: 1,
    type_value: [cssValueTypeID.number],
  },
  {
    id: cssValueID.nowrap,
    type: cssUnitTypesID.keyword,
    unit: 'nowrap',
    need_unit: false,
    value: 'nowrap',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.wrap,
    type: cssUnitTypesID.keyword,
    unit: 'wrap',
    need_unit: false,
    value: 'wrap',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.wrap_reverse,
    type: cssUnitTypesID.keyword,
    unit: 'wrap-reverse',
    need_unit: false,
    value: 'wrap-reverse',
    type_value: [cssValueTypeID.keyword],
  },  
  
]

const DisplayValues: iCSSValue[] = [
  {
    id: cssValueID.flex,
    type: cssUnitTypesID.keyword,
    unit: 'flex',
    need_unit: false,
    value: 'flex',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.block,
    type: cssUnitTypesID.keyword,
    unit: 'block',
    need_unit: false,
    value: 'block',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.inline,
    type: cssUnitTypesID.keyword,
    unit: 'inline',
    need_unit: false,
    value: 'inline',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.grid,
    type: cssUnitTypesID.keyword,
    unit: 'grid',
    need_unit: false,
    value: 'grid',
    type_value: [cssValueTypeID.keyword],
  },
]

const BorderBox: iCSSValue[] = [
  {
    id: cssValueID.border_box,
    type: cssUnitTypesID.keyword,
    unit: 'border-box',
    need_unit: false,
    value: 'border-box',
    type_value: [cssValueTypeID.keyword],
  },
  {
    id: cssValueID.content_box,
    type: cssUnitTypesID.keyword,
    unit: 'content-box',
    need_unit: false,
    value: 'content-box',
    type_value: [cssValueTypeID.keyword],
  },
]

export const CSS_VALUES = [
  ...GlobalValues,
  ...LengthValues,
  ...FlexValues,
  ...DisplayValues,
  ...BorderBox
]