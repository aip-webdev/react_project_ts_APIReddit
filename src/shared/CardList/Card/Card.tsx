import React from 'react';
import styles from './card.scss';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {IPostsContextData} from "../../context/postsContext";
import {isImageUrl} from "../../../utils/js/isImageUrl";

interface ICardData {
    post: IPostsContextData;
}

export function Card({post}: ICardData) {
    const {id, author, author_url, post_url, topic_name, count_comments, count_karma, url, self_text, title} = post;

  return (
      <li className={styles.card}>
        <TextContent post={post} author={author} authorUrl={author_url} topicName={topic_name} title={title} selfText={self_text} postUrl={post_url} />
        {isImageUrl(url) && <Preview url={url}/>}
        <Controls karmaCount={count_karma} commentsCount={count_comments} />
        <Menu />
      </li>
  );
}
