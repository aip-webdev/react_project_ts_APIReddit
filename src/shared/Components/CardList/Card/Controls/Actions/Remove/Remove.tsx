import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';

interface IRemove {
	text?: string
	textHide?: boolean
	btnClassName?: string
}

export const Remove = React.memo(
  ({ text = 'Удалить', textHide, btnClassName }: IRemove): JSX.Element =>
    <ActionButton
      className={btnClassName}
      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.remove} width={10} height={12} />
    </ActionButton>
)

