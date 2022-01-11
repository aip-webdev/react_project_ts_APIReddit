import React from 'react';
import { useMediaSize } from '../../../../../../hooks/useMediaSize';
import { Complain } from '../../../../CardList/Card/Controls/Actions/Complain';
import { Share } from '../../../../CardList/Card/Controls/Actions/Share';
import { Comments } from '../../../../CardList/Card/Controls/Comments';
import styles from './commentactions.scss';

interface ICommentActionsProps {
	handleClick: () => void
}

export const CommentActions = ({ handleClick }: ICommentActionsProps) => {
	const [isMediaSize] = useMediaSize()
	return (
		<div className={styles.postActions}>
			<Comments
				onclick={handleClick}
				textHide={isMediaSize}
				text="Ответить"
				btnClassName={styles.actionButton}
			/>
			<Share textHide={isMediaSize} btnClassName={styles.actionButton} />
			<Complain textHide={isMediaSize} btnClassName={styles.actionButton} />
		</div>
	)
}
