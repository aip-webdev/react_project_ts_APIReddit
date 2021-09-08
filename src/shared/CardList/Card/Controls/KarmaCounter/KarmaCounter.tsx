import React, {CSSProperties} from 'react';
import styles from './karmacounter.scss';
import {EIcon, Icon} from "../../../../Components/Icon";

interface IKarmaCounterProps {
    style?: CSSProperties;
    count: number;
}

export function KarmaCounter(props: IKarmaCounterProps) {
    const {count, style} = props;
  return (
      <div style={style} className={styles.karmaCounter}>
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
