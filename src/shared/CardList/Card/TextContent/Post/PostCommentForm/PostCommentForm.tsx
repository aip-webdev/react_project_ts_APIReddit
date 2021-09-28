import React, {ChangeEvent, FormEvent, useContext, useEffect, useRef, useState} from 'react';
import styles from './postcommentform.scss';
import {userContext} from "../../../../../context/userContext";
import {commentContext} from "../../../../../context/commentsContext";
import {CommentFormActions} from "./CommentFormActions";
import {preventDefault} from "../../../../../../utils/react/preventDefault";
import {stopPropagation} from "../../../../../../utils/react/stopPropagation";

export function PostCommentForm() {
    const { iconImg, name } = useContext(userContext);
    let ref = useRef<HTMLLabelElement>(null);
    const { value, onChange } = useContext(commentContext);
    function handleSubmit (event: FormEvent) {
        onChange('');
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        if(event.target.value !== '' && ref.current) {
            ref.current.hidden = true
        } else if (ref.current) {
            ref.current.hidden = false
        }
        onChange(event.target.value);
    }
    return (
        <form className={styles.form} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
            <textarea className={styles.input} value={value} onChange={handleChange} />

            <label ref={ref} className={styles.label}>
                {name &&
                    <span className={styles.username}>{name}, оставьте ваш комментарий</span>
                }
            </label>

            <CommentFormActions />

            <button className={styles.submitBtn} type='submit'>Комментировать</button>
        </form>
  );
}
