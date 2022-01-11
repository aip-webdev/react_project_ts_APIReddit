import React from 'react';
import { useMediaSize } from '../../../../hooks/useMediaSize';
import { EColor } from '../../../../utils/enums/EColor';
import { declOfNum } from '../../../../utils/js/declOfNumVal';
import { Complain } from '../../CardList/Card/Controls/Actions/Complain';
import { Hide } from '../../CardList/Card/Controls/Actions/Hide';
import { Save } from '../../CardList/Card/Controls/Actions/Save';
import { Share } from '../../CardList/Card/Controls/Actions/Share';
import { Comments } from '../../CardList/Card/Controls/Comments';
import { Text } from '../../ReusedComponents/Text';
import styles from './postactions.scss';

interface PostActionsParams {
	upvote_ratio?: number
	num_comments?: number
}

export const PostActions = ({ upvote_ratio = 0, num_comments = 0 }: PostActionsParams) => {
	const [isMediaMobile] = useMediaSize()
	return (
		<div className={styles.postActions}>
			<Comments
				textHide={isMediaMobile}
				text={`${num_comments} ${declOfNum(num_comments, [
					'комментарий',
					'комментария',
					'комментариев',
				])}`}
				btnClassName={styles.actionButton}
			/>
			<Share textHide={isMediaMobile} btnClassName={styles.actionButton} />
			<Hide textHide={isMediaMobile} btnClassName={styles.actionButton} />
			<Save textHide={isMediaMobile} btnClassName={styles.actionButton} />
			<Complain textHide={isMediaMobile} btnClassName={styles.actionButton} />

			<Text size={14} color={EColor.gray99}>
				{' '}
				{upvote_ratio}% {!isMediaMobile && 'проголосовало'}
			</Text>
		</div>
	)
}
