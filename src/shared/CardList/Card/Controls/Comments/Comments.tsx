import React from 'react';
import {ActionButton} from "../Actions/ActionButton";
import {EIcon, Icon} from "../../../../Icon";

interface IComments {
    text?: any;
    textHide: boolean;
    btnClassName?: string;
}

export function Comments({text = '13',textHide, btnClassName}: IComments) {
  return (
      <ActionButton
          style={{ background: 'transparent' }}
          className={btnClassName}
          children={ <Icon type={EIcon.comments} width={15} height={13} pathFill='#999999'/> }
          text={text}
          textIsHide={textHide}
      />
  );
}
