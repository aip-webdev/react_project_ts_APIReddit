import React from 'react';
import styles from './karmacounter.scss';
import {EIcon, Icon} from "../../../../Icon";

interface IKarmaCounterProps {
    count: number;
}

export function KarmaCounter(props: IKarmaCounterProps) {
    const {count} = props;
  return (
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
            { <Icon type={EIcon.arrow} width={19} height={10} pathFill='#999999'/> }
        </button>

        <span className={styles.karmaValue}>{ count }</span>

        <button className={styles.down}>
            { <Icon type={EIcon.arrow} width={19} height={10} pathFill='#999999'/> }
        </button>
      </div>
  );
}
