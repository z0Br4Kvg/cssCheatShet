// @flow
import * as React from 'react';
import {page_ids, PagesLayer} from "../middleLayer/model";
import {task_ids} from "../data/css/data";

export interface iMenuSideProps {
  page_id_active: page_ids,
  task_id_active: task_ids,
  onChangeTaskActive: (id: task_ids) => void
}

export const MenuSide = (props: any) => {
  const {page_id_active, task_id_active, onChangeTaskActive} = props

  const content = PagesLayer.tasks_list_by_page_id(page_id_active).map( task => {
    const {id, title} = task
    return <>
      <div
        key={id}
        className={'menu-side__item' + (id === task_id_active ? ' --active' : '') }
        onClick={() => onChangeTaskActive(id)}
      >{title}</div>
    </>
  })


  return (
    <div className={'menu-side'} key='menu-side'>
      {content}
    </div>
  );
};