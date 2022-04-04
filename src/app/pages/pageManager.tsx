// @flow
import * as React from 'react';
import {useState} from "react";
import {Menu, iMenuProps} from "./menu";
import {Pages} from "../middleLayer/pages";
import {iPageProps, Page} from "./page";


export const PageManager = (props: any) => {
  const [page_id_active, onChange] = useState( Pages.getDefaultPageId )
  const menuProps: iMenuProps = {page_id_active, onChange}
  const pageProps: iPageProps = {page_id_active}
  return (<>
    <div className="root">
      <Menu {...menuProps} />
      <Page {...pageProps} />
    </div>
  </>)
};


