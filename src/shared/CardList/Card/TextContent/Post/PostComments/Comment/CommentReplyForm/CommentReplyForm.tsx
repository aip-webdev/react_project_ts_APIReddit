import React, {Ref, TextareaHTMLAttributes, useEffect, useRef, useState} from 'react';
import styles from './commentreplyform.scss';
import {preventDefault} from "../../../../../../../../utils/react/preventDefault";
import {stopPropagation} from "../../../../../../../../utils/react/stopPropagation";


interface ICommentReplyProps {
  onClose: () => void;
  postAuthor: string;
}

export function CommentReplyForm({ onClose, postAuthor}: ICommentReplyProps) {
  const [value, setValue] = useState(`${postAuthor}, `);
  let ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
      if (ref.current?.textContent) {
          ref.current?.focus();
          // @ts-ignore
          ref.current?.selectionStart = ref.current.value.length
      }
  }, [ref.current?.textContent])
  function handleSubmit () {
    setValue('');
    onClose();
  }

  return (
      <form className={styles.form} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
        <textarea ref={ref} className={styles.input} value={value} onChange={preventDefault(stopPropagation(() => setValue(value)))} />

        <button className={styles.cancelBtn} onClick={preventDefault(stopPropagation(onClose))} type='button'>Отмена</button>
        <button className={styles.submitBtn} type='submit'>Комментировать</button>
      </form>
  );
}
