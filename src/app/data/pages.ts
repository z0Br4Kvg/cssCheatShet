import {defaultBaseHtmlItem, defaultHtmlItem, defaultRootHtmlItem} from "./defaults/defaultHtmlItem";
import {HtmlItem} from "./htmlItem";

export enum pageID {
  new,
  test
}

export const PAGES = [
  {
    id: pageID.new,
    title: 'New',
    htmlItems: [
      new HtmlItem(new defaultRootHtmlItem(), 0, '', true),
      new HtmlItem(new defaultBaseHtmlItem('random'), 1, 'workspace', false),
      new HtmlItem(new defaultBaseHtmlItem('random'),1, 'workspace', false),
    ],
  }
]