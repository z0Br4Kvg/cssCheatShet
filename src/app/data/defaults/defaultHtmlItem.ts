import {cssProperty} from "../cssProperty";
import {defaultProperty} from "./defaultProperty";
import {htmlItemID} from "../raw/dataHTML";

export interface defaultHtmlItemConstructorObject {
  type: htmlItemID,
  properties: cssProperty[],
}

export class defaultFlexHtmlItem implements defaultHtmlItemConstructorObject{
  type: htmlItemID
  properties: cssProperty[]
  constructor(color: 'red' | 'random' | 'green' = 'red') {
    this.type = htmlItemID.div
    this.properties = [
      new cssProperty(new defaultProperty.display('block')),
      new cssProperty(new defaultProperty.flex_direction),
      new cssProperty(new defaultProperty.justify_content),
      new cssProperty(new defaultProperty.align_items),
      new cssProperty(new defaultProperty.align_content),
      new cssProperty(new defaultProperty.align_self),
      new cssProperty(new defaultProperty.flex_wrap),
      new cssProperty(new defaultProperty.width100),
      new cssProperty(new defaultProperty.height100),
      // new cssProperty(new defaultProperty.padding),
      // new cssProperty(new defaultProperty.margin),
      new cssProperty(new defaultProperty.border),
      new cssProperty(new defaultProperty.bg('grey')),
    ]
  }
}

export class defaultRootHtmlItem implements defaultHtmlItemConstructorObject{
  type: htmlItemID
  properties: cssProperty[]
  constructor() {
    this.type = htmlItemID.div
    this.properties = [
      new cssProperty(new defaultProperty.minWidth),
      new cssProperty(new defaultProperty.maxWidth),
      new cssProperty(new defaultProperty.minHeight),
      new cssProperty(new defaultProperty.maxHeight),
      new cssProperty(new defaultProperty.height350()),
      new cssProperty(new defaultProperty.border),
      new cssProperty(new defaultProperty.bg('grey')),
    ]
  }
}

export class defaultBaseHtmlItem implements defaultHtmlItemConstructorObject{
  type: htmlItemID
  properties: cssProperty[]
  constructor(color: 'red' | 'random' | 'green' = 'red') {
    this.type = htmlItemID.div
    this.properties = [
      new cssProperty(new defaultProperty.width),
      new cssProperty(new defaultProperty.height),
      new cssProperty(new defaultProperty.bg(color)),
    ]
  }
}