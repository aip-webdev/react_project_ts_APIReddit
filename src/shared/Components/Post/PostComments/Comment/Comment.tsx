import React, {useState} from 'react';
import styles from './comment.scss';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';
import {MetaData} from "../../../ReusedComponents/MetaData";
import {CommentActions} from "./CommentActions";
import {CommentReplyForm} from "./CommentReplyForm";
import {ICommentsData} from "../../../../../hooks/usePostsWithCommentsData";

interface ICommentProps {
    comment: ICommentsData | undefined
}

export function Comment({comment}: ICommentProps) {
    if (!comment) return null;
    const [formIsOpen, setFormIsOpen] = useState(false)
    const {author, author_url, comment_body, created, id, replies} = comment;
    const body = comment_body.replaceAll(`&gt;`, `>`).replaceAll(`&lt;`, `<`).replaceAll(`&amp;`, `&`);
    const getNum = () => Math.random() * 100;
    const handleClick = () => {
        setFormIsOpen(!formIsOpen)
    }

    return (
        <li>
            <div className={styles.commentTop}>
                <svg className={styles.svgArrows} width="19" height="30" viewBox="0 0 19 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 30L19 20L8.74228e-07 20L9.5 30Z" fill="#D9D9D9"/>
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
                </svg>
                <MetaData author={author} authorUrl={author_url} publicationTime={created}/>
            </div>
            <div className={styles.commentBottom}>
                <span className={styles.commentBody}>{ReactHtmlParser(body)}</span>
                <CommentActions handleClick={handleClick}/>
                {formIsOpen &&
                <CommentReplyForm key={id + getNum()} onClose={() => setFormIsOpen(false)} postAuthor={author}/>}
                <ul>
                    {!!replies && replies.map((replyComment) => (
                        <Comment key={id + getNum()} comment={replyComment}/>
                    ))}
                </ul>
            </div>
        </li>
    );
}
