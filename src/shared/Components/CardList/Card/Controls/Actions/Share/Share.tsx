import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';

interface IShare {
	text?: string
	textHide?: boolean
	btnClassName?: string
}

export const Share = React.memo(
  ({ text = 'Поделиться', textHide, btnClassName }: IShare): JSX.Element =>
    <ActionButton
      className={btnClassName}
      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.share} width={8} height={10} />
    </ActionButton>
)

