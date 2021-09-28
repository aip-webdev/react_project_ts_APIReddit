import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../ReusedComponents/Icon";

interface IComplain {
  text?: string;
  textHide?: boolean;
  btnClassName?: string;
}

export function Complain({text = 'Пожаловаться', textHide, btnClassName}: IComplain) {
  return (
      <ActionButton
          className={btnClassName}
          children={ <Icon type={EIcon.complain} width={14} height={12} /> }
          text={text}
          textIsHide={textHide}
      />
  );
}
