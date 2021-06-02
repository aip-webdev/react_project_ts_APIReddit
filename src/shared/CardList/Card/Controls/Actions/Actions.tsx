import React from 'react';
import styles from './actions.scss';
import {Share} from "./Share";
import {Save} from "./Save";
import s from '../controls.scss'

export function Actions() {
  return (
    <div className={styles.actions}>
        <Share btnClassName={s.actionButton} textHide={true} />
        <Save btnClassName={s.actionButton} textHide={true} />
    </div>
  );
}
