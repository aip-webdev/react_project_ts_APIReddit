import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';


interface IComplain {
	text?: string
	textHide?: boolean
	btnClassName?: string
}

export const Complain = React.memo(
  ({ text = 'Пожаловаться', textHide, btnClassName }: IComplain): JSX.Element =>
    <ActionButton
      className={btnClassName}
      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.complain} width={14} height={12} />
    </ActionButton>
)

