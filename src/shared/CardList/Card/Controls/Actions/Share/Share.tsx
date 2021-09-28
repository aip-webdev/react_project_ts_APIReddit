import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../ReusedComponents/Icon";


interface IShare {
    text?: string;
    textHide?: boolean;
    btnClassName?: string;
}

export function Share({text = 'Поделиться', textHide, btnClassName} :IShare) {
  return (
      <ActionButton
          className={btnClassName}
          children={ <Icon type={EIcon.share} width={8} height={10} /> }
          text={text}
          textIsHide={textHide}
      />
  );
}
