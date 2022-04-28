export enum cssValueID {
  initial,
  inherit,
  unset,
  px,
  em,
  rem,
  vmin,
  vmax,
  percentage,
  available,
  min_content,
  max_content,
  fit_content,
  auto,
  border_box,
  content_box,
  rgba,
  hexdecimal,
  thin,
  medium,
  thick,
  none,
  hidden,
  dotted,
  solid,
  dashed,
  double,
  groove,
  ridge,
  inset,
  outset,
  flex,
  block,
  inline,
  inline_block,
  inline_flex,
  inline_table,
  list_item,
  table,
  table_caption,
  table_column,
  table_column_group,
  table_cell,
  table_header_group,
  table_footer_group,
  table_footer_row_group,
  table_row,
  row,
  row_reverse,
  column,
  column_reverse,
  wrap,
  nowrap,
  wrap_reverse,
  flex_start,
  flex_end,
  center,
  space_between,
  space_around,
  baseline,
  stretch,
}

export enum cssValueDataTypeID {
  number,
  length,
  percentage,
  color,
  keyword,
}

export const GLOBAL_KEYWORDS = [
  {
    type: cssValueDataTypeID.keyword,
    subType: [''],
    id: cssValueID.initial,
    value: 'initial'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: [''],
    id: cssValueID.inherit,
    value: 'inherit'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: [''],
    id: cssValueID.unset,
    value: 'unset'
  },
]

export const LENGTH = [
  {
    type: cssValueDataTypeID.length,
    subType: [''],
    id: cssValueID.px,
    unit: 'px'
  },
  {
    type: cssValueDataTypeID.length,
    subType: [''],
    id: cssValueID.em,
    unit: 'em'
  },
  {
    type: cssValueDataTypeID.length,
    subType: [''],
    id: cssValueID.rem,
    unit: 'rem'
  },
  {
    type: cssValueDataTypeID.length,
    subType: [''],
    id: cssValueID.vmin,
    unit: 'vmin'
  },
  {
    type: cssValueDataTypeID.length,
    subType: [''],
    id: cssValueID.vmax,
    unit: 'vmax'
  },
]

export const PERCENTAGE = [
  {
    type: cssValueDataTypeID.percentage,
    subType: [''],
    id: cssValueID.percentage,
    unit: '%'
  },
]

export const COLOR = [
  {
    type: cssValueDataTypeID.color,
    subType: [''],
    id: cssValueID.rgba,
  },
  {
    type: cssValueDataTypeID.color,
    subType: [''],
    id: cssValueID.hexdecimal,
  },
]

export const BORDER_WIDTH_KEYWORD = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderWidth'],
    id: cssValueID.thin,
    value: 'thin'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderWidth'],
    id: cssValueID.medium,
    value: 'medium'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderWidth'],
    id: cssValueID.thick,
    value: 'thick'
  },
]

export const BORDER_STYLE_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.none,
    value: 'none'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.dotted,
    value: 'dotted'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.inset,
    value: 'inset'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.dashed,
    value: 'dashed'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.solid,
    value: 'solid'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.double,
    value: 'double'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.groove,
    value: 'groove'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.ridge,
    value: 'ridge'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.outset,
    value: 'outset'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['borderStyle'],
    id: cssValueID.hidden,
    value: 'hidden'
  },
]

export const WIDTH_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['width'],
    id: cssValueID.available,
    value: 'available'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['width'],
    id: cssValueID.min_content,
    value: 'min-content'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['width'],
    id: cssValueID.max_content,
    value: 'max-content'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['width'],
    id: cssValueID.fit_content,
    value: 'fit-content'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['width', 'align-self'],
    id: cssValueID.auto,
    value: 'auto'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['widthOptional'],
    id: cssValueID.border_box,
    value: 'border-box'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['widthOptional'],
    id: cssValueID.content_box,
    value: 'content-box'
  },
]

export const DISPLAY_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.inline,
    value: 'inline'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.block,
    value: 'block'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.flex,
    value: 'flex'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.inline_block,
    value: 'inline-block'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.inline_flex,
    value: 'inline-flex'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.inline_table,
    value: 'inline-table'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.list_item,
    value: 'list-item'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table,
    value: 'table'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_caption,
    value: 'table-caption'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_column,
    value: 'table-column'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_column_group,
    value: 'table-column-group'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_cell,
    value: 'table-cell'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_header_group,
    value: 'table-header-group'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_footer_group,
    value: 'table-footer-group'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_footer_row_group,
    value: 'table-row-group'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['display'],
    id: cssValueID.table_row,
    value: 'table_row'
  },
]

export const FLEX_DIRECTION_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-direction'],
    id: cssValueID.row,
    value: 'row'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-direction'],
    id: cssValueID.row_reverse,
    value: 'row-reverse'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-direction'],
    id: cssValueID.column_reverse,
    value: 'column-reverse'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-direction'],
    id: cssValueID.column,
    value: 'column'
  },
]

export const FLEX_WRAP_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-wrap'],
    id: cssValueID.wrap,
    value: 'wrap'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-wrap'],
    id: cssValueID.wrap_reverse,
    value: 'wrap-reverse'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['flex-wrap'],
    id: cssValueID.nowrap,
    value: 'nowrap'
  },
]

export const JUSTIFY_CONTENT_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['justify-content', 'align-items', 'align-content', 'align-self'],
    id: cssValueID.flex_start,
    value: 'flex-start'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['justify-content', 'align-items', 'align-content', 'align-self'],
    id: cssValueID.flex_end,
    value: 'flex-end'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['justify-content', 'align-items', 'align-content', 'align-self'],
    id: cssValueID.center,
    value: 'center'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['justify-content', 'align-content'],
    id: cssValueID.space_between,
    value: 'space-between'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['justify-content', 'align-content'],
    id: cssValueID.space_around,
    value: 'space-around'
  },
]

export const ALIGN_ITEMS_KEYWORDS: CSS_VALUE_DATA[] = [
  {
    type: cssValueDataTypeID.keyword,
    subType: ['align-items', 'align-self'],
    id: cssValueID.baseline,
    value: 'baseline'
  },
  {
    type: cssValueDataTypeID.keyword,
    subType: ['align-items', 'align-content', 'align-self'],
    id: cssValueID.stretch,
    value: 'stretch'
  },

]

export interface CSS_VALUE_DATA {
  type: cssValueDataTypeID,
  subType: string[],
  id: cssValueID,
  value?: string,
  unit?: string,
}

export const VALUES: CSS_VALUE_DATA[] = [
  ...GLOBAL_KEYWORDS,
  ...LENGTH,
  ...PERCENTAGE,
  ...BORDER_WIDTH_KEYWORD,
  ...BORDER_STYLE_KEYWORDS,
  ...WIDTH_KEYWORDS,
  ...COLOR,
  ...DISPLAY_KEYWORDS,
  ...FLEX_DIRECTION_KEYWORDS,
  ...FLEX_WRAP_KEYWORDS,
  ...JUSTIFY_CONTENT_KEYWORDS,
  ...ALIGN_ITEMS_KEYWORDS,
]

export class VALUES_API {
  static all = VALUES

  static global = ((): cssValueID[] => {
    return [cssValueID.initial, cssValueID.inherit, cssValueID.unset]
  })()

  static color = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.type === cssValueDataTypeID.color).map(value => value.id )
  })()

  static widthIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('width')).map(value => value.id)
  })()

  static flexDirecitonIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('flex-direction')).map(value => value.id)
  })()

  static flexWrapIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('flex-wrap')).map(value => value.id)
  })()

  static widthOptionalIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('widthOptional')).map(value => value.id)
  })()

  static lengthIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.type === cssValueDataTypeID.length ).map(value => value.id )
  })()

  static percentageIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.type === cssValueDataTypeID.percentage ).map(value => value.id )
  })()

  static getIDSByPropertyTitle = ( title: string ) : cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes(title)).map(value => value.id)
  }

  static borderWidthIDS = ((): cssValueID[] => {
    return [...VALUES_API.lengthIDS, ...VALUES_API.percentageIDS, cssValueID.thin, cssValueID.medium, cssValueID.thick]
  })()

  static borderStyleIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('borderStyle')).map(value => value.id)
  })()

  static displayIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('display')).map(value => value.id)
  })()

  static justifyContentIDS = ((): cssValueID[] => {
    return VALUES_API.all.filter(value => value.subType.includes('justify-content')).map(value => value.id)
  })()

  static getTypeByID(id: cssValueID): cssValueDataTypeID{
    return VALUES_API.all.filter(value => value.id === id).map(value => value.type)[0]
  }

  static getValue(id: cssValueID): string {
    return VALUES_API.all.filter(value => value.id === id).map(value => value.value)[0]
  }
  static getUnit(id: cssValueID): string {
    return VALUES_API.all.filter(value => value.id === id).map(value => value.unit)[0]
  }

}


