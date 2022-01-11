import React, { ReactNode } from 'react';
import styles from './actionbutton.scss';

interface IActionButton {
	className?: string
	children?: ReactNode
	text?: string
	textIsHide?: boolean
	style?: object
	onclick?: () => void
}

export const ActionButton = React.memo(
  ({
     children,
     text,
     textIsHide = false,
     className,
     onclick,
     style,
   }: IActionButton): JSX.Element =>
    <button className={className} style={style} onClick={onclick}>
      {children}
      {!textIsHide && <span className={styles.buttonText}>{text}</span>}
    </button>
)

