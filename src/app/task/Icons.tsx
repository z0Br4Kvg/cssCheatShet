import * as React from "react";

type Props = {
  icon: ICONS,
  onCLick: () => void
}
export enum ICONS {
  trash,
  add,
  settings,
}

export const Icons = (props: Props) => {
  const {icon, onCLick} = props

  const icons = {
    [ICONS.trash]: {
      src: 'img/icon-trash.svg',
      className: 'icon-trash icons'
    },
    [ICONS.add]: {
      src: 'img/icon-add.svg',
      className: 'icon-add icons'
    },
    [ICONS.settings]: {
      src: 'img/icon-settings.svg',
      className: 'icon-settings icons'
    },
  }
  const {className, src} = icons[icon]

  return (<img className={className} src={src} onClick={() => onCLick()}/>)
}