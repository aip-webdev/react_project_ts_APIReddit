import React, { useRef } from 'react';
import { usePostsData } from '../../../hooks/usePostsData';
import { usePostsWithCommentsData } from '../../../hooks/usePostsWithCommentsData';
import useStore from '../../../store';
import { Loading } from '../ReusedComponents/Loading';
import { Card } from './Card';
import { Controls } from './Card/Controls';
import { Menu } from './Card/Menu';

import styles from './cardlist.scss';

export const CardList = (): JSX.Element => {
  const postsRequestAsync = useStore( state => state.postsRequestAsync)
	const bottomOfList = useRef(null)

	const { postsData, loading } = usePostsData(bottomOfList)
	usePostsWithCommentsData()

	const handleClick = () => postsRequestAsync()

	return (
		<>
			<ul className={styles.cardList}>
				{loading && <Loading />}

				{postsData && postsData.map(post => <Card key={post.id} post={post} />)}

				{postsData.length % 60 === 0 && postsData.length !== 0 &&
          <button className={styles.loadMore} onClick={handleClick}>Загрузить ещё</button>
				}

				<div id="cardListBottom" style={{ height: '10px' }} ref={bottomOfList} />
			</ul>
			<ul className={styles.cardList}>
				{/* eslint-disable-next-line prefer-spread */}
				{Array.apply(null, Array(20).map(
					(value: unknown, index: number) =>
						loading &&
              <li className={styles.emptyCard} key={index * index + 1}><div className={styles.emptyTextBox}><span className={styles.emptySpan}/><span className={styles.emptySpan}/><span className={styles.emptySpan}/></div><div className={styles.emptyImg} /><Controls karmaCount={0} commentsCount={0} /><Menu /></li>
					,
				))}
			</ul>
		</>
	)
}
