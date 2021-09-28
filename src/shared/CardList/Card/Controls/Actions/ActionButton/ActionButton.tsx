import React, {ReactNode} from 'react';
import styles from './actionbutton.scss';

interface IActionButton {
    className?: string;
    children?: ReactNode;
    text?: any;
    textIsHide?: boolean;
    style?: object;
    onclick?: () => void;
}

export function ActionButton ({children, text, textIsHide = false, className, onclick, style}: IActionButton) {
  return (
      <button className={className} style={style} onClick={onclick}>
        {children}
        { !textIsHide && <span className={styles.buttonText}>{text}</span>}
      </button>
  );
}
