import React from 'react';
import { ICommentsData } from '../../../../hooks/usePostsWithCommentsData';
import { sortingPostComments } from '../../../../utils/lists/sortPostComments';
import { SortBlock } from '../../ReusedComponents/SortBlock';
import { Comment } from './Comment';
import styles from './postcomments.scss';

interface IPostCommentsProps {
	comments: ICommentsData[]
	postLink?: string
}

export const PostComments = (props: IPostCommentsProps) => {
	const { comments, postLink } = props
	comments.pop()
	return (
		<div>
			<div className={styles.container}>
				<span className={styles.preselect}>Сортировать по:</span>
				<SortBlock
					onSelect={() => null}
					sortList={sortingPostComments}
					sortBlockStyle={styles.sortBlock}
					selectButtonStyle={styles.selectButton}
					sortListStyle={styles.sortList}
					listLineStyle={styles.listLine}
				/>
			</div>
			<ul>
				{comments.length > 0 &&
          comments.map(comment => <Comment key={`${comment.id}${comments.indexOf(comment)}`} comment={comment} postLink={postLink} />)
				}
			</ul>
		</div>
	)
}
