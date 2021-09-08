import React, {useState} from 'react';
import styles from './textcontent.scss';
import {Post} from "../Post";
import {stringShorter} from "../../../../utils/js/stringShorter";
import {IPostsContextData} from "../../../context/postsContext";
import {MetaData} from "../MetaData";

interface ITextContentProps {
    author: string;
    authorUrl?: string;
    title?: string;
    topicName?: string;
    postUrl?: string;
    selfText?: string;
    post: IPostsContextData;
}

export function TextContent(props: ITextContentProps) {
    const { author, authorUrl, post, selfText, title, topicName } = props;
    const [isModalOpened, setIsModalOpened] = useState(false);

    return (
    <div className={styles.textContent}>
        <MetaData author={author} authorUrl={authorUrl} topicName={topicName}/>
        <h2 className={styles.title}>
        <button type='button' className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
            {title}
        </button>
            {selfText &&
                <h3 className={styles.titleSelf}>
                    {stringShorter(selfText, 30, 60, 80)}
                </h3>
            }
        </h2>
        {isModalOpened && <Post post={post} onClose ={() => setIsModalOpened(false)} />}
    </div>
    );
}
