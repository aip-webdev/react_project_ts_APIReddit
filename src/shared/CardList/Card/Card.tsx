import React from 'react';
import styles from './card.scss';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {IPostsContextData} from "../../context/postsContext";
import {includes} from "ramda";
import {Text} from "../../Text";
import {stringShorter} from "../../../utils/react/stringShorter";

interface ICardData {
    post: IPostsContextData;
}

export function Card({post}: ICardData) {
    const {id, author, author_url, post_url, count_comments, count_karma, url, self_text, title} = post;
    const isImageUrl = () =>
        includes('png', url) || includes('jpg', url) || includes('svg', url)
  return (
      <li className={styles.card}>
        <TextContent author={author} authorUrl={author_url} title={title} selfText={self_text} postUrl={post_url} />
        {isImageUrl() && <Preview url={url}/>}
        {!isImageUrl() && <a className={styles.postLink} href={url}><Text  size={14}>{stringShorter(url,40)}</Text></a>}
        <Controls karmaCount={count_karma} commentsCount={count_comments} />
        <Menu />
      </li>
  );
}
