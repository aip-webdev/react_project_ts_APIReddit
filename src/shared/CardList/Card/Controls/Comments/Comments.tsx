import React from 'react';
import {ActionButton} from "../Actions/ActionButton";
import {EIcon, Icon} from "../../../../ReusedComponents/Icon";

interface IComments {
    text?: any;
    textHide: boolean;
    btnClassName?: string;
    onclick?: () => void;
}

export function Comments({text = '13',textHide, btnClassName, onclick}: IComments) {
  return (
      <ActionButton
          onclick={onclick}
          style={{ background: 'transparent' }}
          className={btnClassName}
          children={ <Icon type={EIcon.comments} width={15} height={13} pathFill='#999999'/> }
          text={text}
          textIsHide={textHide}
      />
  );
}
