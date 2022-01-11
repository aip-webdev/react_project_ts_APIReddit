import React from 'react';

import { useMediaSize } from '../../../hooks/useMediaSize';
import useStore from '../../../store';
import { sortingPostList } from '../../../utils/lists/sortPostCategory';
import { SortBlock } from '../ReusedComponents/SortBlock';
import styles from './header.scss';
import { Mails } from './Mails';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { UserBlock } from './UserBlock';

export const Header = () => {
  const setPostType = useStore(state => state.setPostType)
	const [isMediaMobile] = useMediaSize()
	return (
		<header id="js-header" className={styles.header}>
			<div className={styles.headersBlock}>
				<Mails />
				<SearchBlock />
				<UserBlock />
			</div>
			{!isMediaMobile && <ThreadTitle />}
			<SortBlock onSelect={type => setPostType(type)} sortList={sortingPostList} />
		</header>
	)
}
