import React from 'react';
import s from '../controls.scss';
import styles from './actions.scss';
import { Save } from './Save';
import { Share } from './Share';

export const Actions = React.memo((): JSX.Element =>
	<div className={styles.actions}>
		<Share btnClassName={s.actionButton} textHide={true} />
		<Save btnClassName={s.actionButton} textHide={true} />
	</div>)

