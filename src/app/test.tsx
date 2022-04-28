// @flow
import * as React from 'react';
import {cssValueID} from "./data/raw/dataValues";
import {PAGES} from "./data/pages";
import {Task} from "./task/Task";

type Props = {

};
export const Test = (props: Props) => {

  const page = PAGES[0]
  const {title, htmlItems} = page
  const taskProps = {htmlItems}
  return (
    <div className='page'>
      <Task {...taskProps}/>
    </div>
  );
};