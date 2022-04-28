import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';
import {Workspace} from "./Workspace";
import {HtmlItemView} from "./HtmlItemView";
import {HtmlItem} from "../data/htmlItem";
import {MenuItems} from "./MenuItems";
import {StateAPI} from "./StateAPI";
const _ = require('lodash')

export const TaskApi = React.createContext(null)

type Props = {
  htmlItems: HtmlItem[],
};

export const Task = (props: Props) => {

  const [state, onChange] = useState( _.cloneDeep(props.htmlItems) )

  const memo = useMemo(() => {
    const api = new StateAPI(state, onChange)

    return (
      <TaskApi.Provider value={api}>
        <div className='task'>
          <div className='task__menu'>
            <MenuItems />
          </div>
          <div className='task__content'>
            <HtmlItemView />
            <Workspace />
          </div>
        </div>
      </TaskApi.Provider>
    )
  }, [state])

  return memo
};
//