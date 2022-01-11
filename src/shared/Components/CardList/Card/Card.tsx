import React from 'react';
import { IPostData } from '../../../../hooks/usePostsData';
import { isImageUrl } from '../../../../utils/js/isImageUrl';
import styles from './card.scss';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export interface ICardData {
	post: IPostData
}

export const Card = React.memo(
  ({ post }: ICardData): JSX.Element => {
    const { count_comments, count_karma, url }: IPostData = post

    return (
      <li className={styles.card}>
        <TextContent post={post} />
        {isImageUrl(url) && <Preview url={url} />}
        <Controls karmaCount={count_karma} commentsCount={count_comments} />
        <Menu />
      </li>
    )
  }
)
