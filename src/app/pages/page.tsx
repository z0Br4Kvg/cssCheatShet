// @flow
import * as React from 'react';
import {Pages, pageID} from "../middleLayer/pages";
import {Task} from "../task/task";

export interface iPageProps {
  page_id_active: pageID,
}

export const Page = (props: iPageProps) => {

  const {page_id_active} = props
  const {title, property} = Pages.getPageById(page_id_active)
  const taskProps = {property, title}

  return (
    <div className='page'>
      <Task {...taskProps}/>
    </div>
  )

};

