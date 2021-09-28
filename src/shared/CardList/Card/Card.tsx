import React from 'react';
import styles from './card.scss';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {isImageUrl} from "../../../utils/js/isImageUrl";
import {IPostData} from "../../../hooks/usePostsData";

export interface ICardData {
    post: IPostData;
}

export function Card({post}: ICardData) {
    const {id, author, author_url, post_url, topic_name, count_comments, count_karma, created, url, self_text, title} = post;

    return (
        <li className={styles.card}>
            <TextContent post={post} />
            {isImageUrl(url) && <Preview url={url}/>}
            <Controls karmaCount={count_karma} commentsCount={count_comments} />
            <Menu />
        </li>
    );
}
