// @flow
import * as React from 'react';
import {useMemo, useState} from "react";

type Props = {
  self: Record<string, string>,
  child: Record<string, string>[],
};

export const Workspace = (props: Props) => {
  const {self, child} = props
  const [value, onChangeValue] = useState(
    Array(props.child.length).fill('').map( (item, i) => (i+1).toString() )
  )

  useMemo(() => {
    onChangeValue( prev => prev.concat( [ (1 + prev.length).toString() ] ))
  }, [props])

  return (
    <div className='task__workspace'>
      <div className='task__workspace-parent' style={self}>
        {
          child.map( (style, n) => {
            // @ts-ignore
            return <div
              contentEditable='true'
              suppressContentEditableWarning={true}
              key={'task__workspace-child' + n}
              onChange={ (e) => onChangeValue(prev => prev.map((item, i) => n === i ? e.target.value : item  ) ) }
              className='task__workspace-child'
              style={style}
            >{value[n]}</div>
          })
        }
      </div>
    </div>
  );
};