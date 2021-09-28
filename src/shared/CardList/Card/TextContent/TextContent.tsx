import React, {useContext, useState} from 'react';
import styles from './textcontent.scss';
import {Post} from "./Post";
import {stringShorter} from "../../../../utils/js/stringShorter";
import {MetaData} from "../../../ReusedComponents/MetaData";
import {ICardData} from "../Card";
import {postsAndCommentsContext} from "../../../context/postWithCommentsContext";

export function TextContent({post}: ICardData) {
    const {id, author, author_url, post_url, topic_name, count_comments, count_karma, created, url, self_text, title} = post;
    const [isModalOpened, setIsModalOpened] = useState(false);
    let posts = useContext(postsAndCommentsContext);
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
            {posts && isModalOpened && <Post
                post={posts.filter(postData => postData.id = id)[0]}
                onClose={() => setIsModalOpened(false)}/>
            }
        </div>
    );
}
