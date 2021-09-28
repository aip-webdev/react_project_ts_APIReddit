import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../ReusedComponents/Icon";

interface IHide {
  text?: string;
  textHide?: boolean;
  btnClassName?: string;
}

export function Hide({text = 'Скрыть', textHide, btnClassName}: IHide) {
  return (
      <ActionButton
          className={btnClassName}
          children={ <Icon type={EIcon.hide} width={12} height={12} /> }
          text={text}
          textIsHide={textHide}
      />
  );
}
