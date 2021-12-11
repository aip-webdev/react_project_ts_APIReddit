import React from 'react';
import styles from './card.scss';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {isImageUrl} from "../../../../utils/js/isImageUrl";
import {IPostData} from "../../../../hooks/usePostsData";

export interface ICardData {
    post: IPostData;
    empty?: boolean;
}

export function Card({post, empty = false}: ICardData) {
    const {
        count_comments,
        count_karma,
        url,
    }: IPostData = post;

    return (
        <li className={!empty ? styles.card : styles.emptyCard}>
            <TextContent post={post}/>
            {isImageUrl(url) && <Preview url={url}/>}
            <Controls karmaCount={count_karma} commentsCount={count_comments}/>
            <Menu/>
        </li>
    );
}
