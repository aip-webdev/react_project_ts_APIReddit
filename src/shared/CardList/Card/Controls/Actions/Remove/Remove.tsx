import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../Icon";

interface IRemove {
    text?: string;
    textHide?: boolean;
    btnClassName?: string;
}

export function Remove({text = 'Удалить', textHide, btnClassName}: IRemove) {
  return (
      <ActionButton
          className={btnClassName}
          children={ <Icon type={EIcon.remove} width={10} height={12} /> }
          text={text}
          textIsHide={textHide}
      />
  );
}
