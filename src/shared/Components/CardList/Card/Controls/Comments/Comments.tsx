import React from 'react';
import { EIcon, Icon } from '../../../../ReusedComponents/Icon';
import { ActionButton } from '../Actions/ActionButton';

interface IComments {
	text?: string
	textHide: boolean
	btnClassName?: string
	onclick?: () => void
}

export const Comments = React.memo(
  ({ text = '13', textHide, btnClassName, onclick }: IComments): JSX.Element =>
    <ActionButton
      onclick={onclick}
      style={{ background: 'transparent' }}
      className={btnClassName}
      text={text}
      textIsHide={textHide}
    >
      <Icon type={EIcon.comments} width={15} height={13} pathFill="#999999" />
    </ActionButton>
)

