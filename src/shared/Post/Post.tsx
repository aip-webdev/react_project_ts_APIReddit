import React, {CSSProperties} from 'react';
import styles from './post.scss';
import {Modal} from "../ReusedComponents/Modal";
import {KarmaCounter} from "../CardList/Card/Controls/KarmaCounter";
import {MetaData} from "../ReusedComponents/MetaData";
import {isImageUrl} from "../../utils/js/isImageUrl";
import {PostActions} from "./PostActions";
import {PostComments} from "./PostComments";

import {PostCommentFormContainer} from "./PostCommentFormContainer";
import {IPostWithCommentsData} from "../../hooks/usePostsWithCommentsData";

interface PostParams {
    onClose?: () => void;
    post: IPostWithCommentsData;
}

const karmaStyle: CSSProperties = {
    position: 'initial',
    top: 'initial',
    transform: 'initial',
    right: 'initial'
}

export function Post({onClose, post}: PostParams) {
    let {
        author,
        author_url,
        comments,
        count_karma,
        created,
        self_text,
        title,
        topic_name,
        count_comments,
        url,
        upvote_ratio
    } = post;

    function handleClick() {
        onClose?.()
    }

    return (
        <Modal onClose={onClose}>
            <div className={styles.postInfo}>
                <KarmaCounter style={karmaStyle} count={count_karma}/>
                <div className={styles.postTopRight}>
                    <h2 className={styles.postTitle}> {title} </h2>
                    <MetaData author={author} authorUrl={author_url} topicName={topic_name} publicationTime={created}/>
                </div>
            </div>
            <div className={styles.post}>
                <div className={styles.postContent}>
                    <span className={styles.postText}>{self_text}</span>
                    {isImageUrl(url) && <img className={styles.postImg} src={url} alt="Post image"/>}
                </div>

                <PostActions upvote_ratio={upvote_ratio} num_comments={count_comments}/>

                <PostCommentFormContainer/>

                {comments && <PostComments comments={comments}/>}
            </div>

            <button className={styles.closeBtn} type='button' onClick={handleClick}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z"
                        fill="#ADADAD"/>
                    <path d="M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z"
                          fill="#ADADAD"/>
                </svg>
            </button>
        </Modal>
    );
}

