import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';

interface IHide {
	text?: string
	textHide?: boolean
	btnClassName?: string
}

export const Hide = React.memo(
  ({ text = 'Скрыть', textHide, btnClassName }: IHide): JSX.Element =>
    <ActionButton
      className={btnClassName}
      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.hide} width={12} height={12} />
    </ActionButton>
)

