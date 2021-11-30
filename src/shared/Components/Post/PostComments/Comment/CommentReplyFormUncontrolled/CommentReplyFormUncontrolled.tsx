import React, {useEffect, useRef} from 'react';
import styles from './commentreplyform.scss';
import {preventDefault} from "../../../../../../utils/react/preventDefault";
import {stopPropagation} from "../../../../../../utils/react/stopPropagation";

interface ICommentReplyProps {
    onClose: () => void;
    postAuthor: string;
}

export function CommentReplyFormUncontrolled({onClose, postAuthor}: ICommentReplyProps) {
    let ref = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current?.focus();
            ref.current.selectionStart = ref.current.value.length
        }
    }, [ref.current?.textContent])

    function handleSubmit() {
        if (ref.current) ref.current.value = '';
        onClose();
    }

    return (
        <form className={styles.form} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
            <textarea ref={ref} className={styles.input} defaultValue={`${postAuthor}, `}/>

            <button className={styles.cancelBtn} onClick={preventDefault(stopPropagation(onClose))}
                    type='button'>Отмена
            </button>
            <button className={styles.submitBtn} type='submit'>Комментировать</button>
        </form>
    );
}
