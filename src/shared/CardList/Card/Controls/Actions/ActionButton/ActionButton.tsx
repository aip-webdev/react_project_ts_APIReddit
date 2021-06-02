import React, {ReactNode} from 'react';
import styles from './actionbutton.scss';

interface IActionButton {
    className?: string;
    children?: ReactNode;
    text?: any;
    textIsHide?: boolean;
    style?: object;
}

export function ActionButton ({children, text, textIsHide = false, className, style}: IActionButton) {
  return (
      <button className={className} style={style}>
        {children}
        { !textIsHide && <span className={styles.buttonText}>{text}</span>}
      </button>
  );
}
