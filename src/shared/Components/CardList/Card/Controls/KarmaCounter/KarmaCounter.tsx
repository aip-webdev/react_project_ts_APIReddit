import React, { CSSProperties } from 'react';
import { EIcon, Icon } from '../../../../ReusedComponents/Icon';
import styles from './karmacounter.scss';

interface IKarmaCounterProps {
	style?: CSSProperties
	count: number
}

export const KarmaCounter = React.memo(
  (props: IKarmaCounterProps): JSX.Element => {
    const { count, style } = props
    return (
      <div style={style} className={styles.karmaCounter}>
        <button className={styles.up}>
          {<Icon type={EIcon.arrow} width={19} height={10} pathFill="#999999" />}
        </button>

        <span className={styles.karmaValue}>{count}</span>

        <button className={styles.down}>
          {<Icon type={EIcon.arrow} width={19} height={10} pathFill="#999999" />}
        </button>
      </div>
    )
  }
)
