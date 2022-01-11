import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';

interface ISave {
	text?: string
	textHide?: boolean
	btnClassName?: string
}

export const Save = React.memo(
  ({ text = 'Сохранить', textHide, btnClassName }: ISave): JSX.Element =>
    <ActionButton
      className={btnClassName}

      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.save} width={10} height={10} />
    </ActionButton>
)

