import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../ReusedComponents/Icon";

interface ISave {
    text?: string;
    textHide?: boolean;
    btnClassName?: string;
}

export function Save({text = 'Сохранить', textHide, btnClassName}: ISave) {
  return (
      <ActionButton
          className={btnClassName}
          children={ <Icon type={EIcon.save} width={10} height={10} /> }
          text={text}
          textIsHide={textHide}
      />
  );
}
