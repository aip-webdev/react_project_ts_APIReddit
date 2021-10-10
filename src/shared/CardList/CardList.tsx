import React from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";
import {usePostsData} from "../../hooks/usePostsData";
import {usePostsWithCommentsData} from "../../hooks/usePostsWithCommentsData";

export function CardList() {
  const { postsData, loading} = usePostsData()
  usePostsWithCommentsData();
  return (
    <ul className={styles.cardList}>
      {loading && 'Загрузка'}
        {postsData && postsData.map((post) => (
            <Card key={post.id} post={post}/>
        ))}

    </ul>
  );
}
