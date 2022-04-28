// @flow
import * as React from 'react';
import {useContext} from "react";
import {TaskApi} from "./Task";
import {StateAPI} from "./StateAPI";

export const Workspace = () => {
  const api: StateAPI = useContext(TaskApi)
  const content = api.getPropsWorkspace()
  return (
    <div className='workspace'>
      {content}
    </div>
  );
};