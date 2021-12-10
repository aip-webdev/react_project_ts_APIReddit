import React, {CSSProperties, useEffect, useState} from 'react';
import styles from './post.scss';
import {Modal} from "../ReusedComponents/Modal";
import {KarmaCounter} from "../CardList/Card/Controls/KarmaCounter";
import {MetaData} from "../ReusedComponents/MetaData";
import {isImageUrl} from "../../../utils/js/isImageUrl";
import {PostComments} from "./PostComments";
import {IPostWithCommentsData} from "../../../hooks/usePostsWithCommentsData";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IInitState} from "../../../store";
import {PostCommentFormContainer} from "./PostCommentFormContainer";
import {PostActions} from "./PostActions";
import {NotFoundPage} from "../../Pages/NotFoundPage";
import {Loading} from "../ReusedComponents/Loading";
import {useBodyHeight} from "../../../hooks/useBodyHeight";
import {find, propEq} from "ramda";

const karmaStyle: CSSProperties = {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
}

export function Post() {
    const navigate = useNavigate();
    let {postId} = useParams<"postId">();
    let height = useBodyHeight();
    const [post, setPost] = useState<any>();
    const [postHeight, setPostHeight] = useState(75)

    let postsWC = useSelector<IInitState, IPostWithCommentsData[]>((state) =>
        state.postWithComments.postsWCData);
    (async () => {
        let postwc = await find(propEq('id', postId))(postsWC);
        setPost(postwc ?? null)
    })().catch(console.log)

    useEffect(() => {
        if (!!post) {
            let postHead = document.getElementById(`${post.id}`)
             !!postHead && setPostHeight(100 - Math.ceil(postHead.offsetHeight / (height / 100)))
        }
    }, [post])

    function handleClick() {
        navigate(-1);
    }

    if (!post && typeof post === 'object' && postsWC.length%20 === 0) {
        return (<NotFoundPage/>)
    }

    return (
        <>
            {!post && <Loading/>}
            {!!post &&
            <Modal>
                <div id={post.id} className={styles.post}>
                    <KarmaCounter style={karmaStyle} count={post.count_karma}/>
                    <div className={styles.postTopRight}>
                        <h2 className={styles.postTitle}> {post.title} </h2>
                        <MetaData author={post.author} authorUrl={post.author_url} topicName={post.topic_name}
                                  publicationTime={post.created}/>
                    </div>
                </div>
                <div style={{height: `${postHeight}vh`}} className={styles.postInfo}>
                    <div className={styles.postContent}>
                        <span className={styles.postText}>{post.self_text}</span>
                        {isImageUrl(post.url) && <img className={styles.postImg} src={post.url} alt="Post image"/>}
                    </div>

                    <PostActions upvote_ratio={post.upvote_ratio} num_comments={post.count_comments}/>

                    <PostCommentFormContainer/>

                    {post.comments && <PostComments comments={post.comments} postLink={post?.post_url}/>}
                </div>

                <button className={styles.closeBtn} type='button' onClick={handleClick}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z"
                            fill="#ADADAD"/>
                        <path
                            d="M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z"
                            fill="#ADADAD"/>
                    </svg>
                </button>
            </Modal>
            }
        </>
    );
}

