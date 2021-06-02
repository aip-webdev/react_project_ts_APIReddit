import React, {useContext} from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardList() {
  const posts = useContext(postsContext)

  return (
    <ul className={styles.cardList}>
        {posts.map((post) => (
            <Card key={post.id} post={post}/>
        ))}

    </ul>
  );
}
