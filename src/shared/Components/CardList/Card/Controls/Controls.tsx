import React from 'react';
import { useMediaSize } from '../../../../../hooks/useMediaSize';
import { Actions } from './Actions';
import { Comments } from './Comments';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';

interface IControlsProps {
	commentsCount: number
	karmaCount: number
}

export const Controls = (props: IControlsProps) => {
	const { commentsCount, karmaCount } = props
	const [isMediaMobile] = useMediaSize()
	return (
		<div className={styles.controls}>
			<KarmaCounter count={karmaCount} />
			{isMediaMobile &&
        <Comments btnClassName={styles.actionButton} text={`${commentsCount}`} textHide={false} />
			}
			{isMediaMobile && <Actions />}
		</div>
	)
}
