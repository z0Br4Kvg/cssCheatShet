import * as React from "react";
import {Pages, pageID} from "../middleLayer/pages";

export interface iMenuProps {
  onChange: (id: pageID) => void,
  page_id_active: pageID,
}

export const Menu = (props: iMenuProps) => {
  const {onChange, page_id_active} = props

  const pageList = Pages.pagesList.map( page => {
    const {title, id} = page
    return <div
      key={'page' + id}
      className={'menu__item' + ((id === page_id_active) ? '--active' : '')}
      onClick={ () => onChange(id) }
    >{title}</div>
  })
  return(
    <div className='menu'>
      {pageList}
    </div>
  )
}