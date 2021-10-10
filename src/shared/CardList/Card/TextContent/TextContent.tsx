import React, { useState} from 'react';
import styles from './textcontent.scss';

import {stringShorter} from "../../../../utils/js/stringShorter";
import {MetaData} from "../../../ReusedComponents/MetaData";
import {ICardData} from "../Card";
import {Post} from "../../../Post";

import {IPostWithCommentsData, usePostsWithCommentsData} from "../../../../hooks/usePostsWithCommentsData";
import {useSelector} from "react-redux";
import {IInitState} from "../../../../store";

export function TextContent({post}: ICardData) {
    const {id, author, author_url, post_url, topic_name, count_comments, count_karma, created, url, self_text, title} = post;
    const [isModalOpened, setIsModalOpened] = useState(false);
    const postsWCData = useSelector<IInitState, IPostWithCommentsData[]>( state => state.postWithComments.postsWCData);
    return (
        <div className={styles.textContent}>
            <MetaData author={author} authorUrl={author_url} topicName={topic_name} publicationTime={created}/>
            <h2 className={styles.title}>
                <button type='button' className={styles.postLink} onClick={() => { setIsModalOpened(!isModalOpened) }}>
                    {title}
                </button>
                {self_text &&
                <span className={styles.titleSelf}>
                    {stringShorter(self_text, 30, 60, 80)}
                </span>
                }
            </h2>
            {postsWCData && isModalOpened && <Post
                post={postsWCData.filter(post => post.id===id)[0]}
                onClose={() => setIsModalOpened(false)}/>
            }
        </div>
    );
}
