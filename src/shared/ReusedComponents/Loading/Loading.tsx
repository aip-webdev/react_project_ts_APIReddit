import React from 'react';
import styles from './loading.scss';

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.text}>Loading</div>
        <div className={styles.dots}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
