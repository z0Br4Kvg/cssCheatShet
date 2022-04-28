import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {PropertyArgumentMenu} from "./PropertyArgumentMenu";
import {StateAPI} from "./StateAPI";
import {PropertyEditing} from "./PropertyEditing";
import {PropertyValues} from "./PropertyValues";
import {ICONS, Icons} from "./Icons";
import {TaskApi} from "./Task";
import {UUIDContext} from "./PropertyList";
import {PropertyAdd} from "./PropertyAdd";

export const PropertyView = () => {
  const api: StateAPI = useContext(TaskApi)
  const {htmlItemUUID, propertyUUID} = useContext(UUIDContext)

  const title = api.getPropertyByHtmiItemUUIDandPropertyUUID(htmlItemUUID, propertyUUID).title
  const onDel = api.delPropertyByHtmlItemUUIDAndPropertyUUID
  const [isEdit, onChangeIsEdit] = useState(false)

  const updateIsEdit = () => {
    onChangeIsEdit(prev => !prev)
  }

  useEffect(() => {
    onChangeIsEdit(false)
  }, [htmlItemUUID])

  const isShow = !isEdit

  return (
    <div className='property'>
      <div className="property__title-wrap">
        <div className='property__title'>
          {title}
        </div>
        {/*<div className="property__control">*/}
        {/*  <Icons onCLick={updateIsEdit} icon={ICONS.settings} />*/}
        {/*  <Icons onCLick={() => onDel(htmlItemUUID, propertyUUID) } icon={ICONS.trash} />*/}
        {/*</div>*/}
      </div>
      <PropertyArgumentMenu />

      <div className='property__args'>
        { isShow && <PropertyValues /> }
        { isEdit && <PropertyEditing /> }
      </div>

    </div>
  )
}