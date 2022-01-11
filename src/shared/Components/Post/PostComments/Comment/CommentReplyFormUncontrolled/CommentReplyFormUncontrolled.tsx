import React, { useEffect, useRef } from 'react';
import { preventDefault } from '../../../../../../utils/react/preventDefault';
import { stopPropagation } from '../../../../../../utils/react/stopPropagation';
import styles from './commentreplyform.scss';

interface ICommentReplyProps {
	onClose: () => void
	postAuthor: string
}

export const CommentReplyFormUncontrolled = ({ onClose, postAuthor }: ICommentReplyProps) => {
	const ref = useRef<HTMLTextAreaElement>(null)
	useEffect(() => {
		if (ref.current) {
			ref.current?.focus()
			ref.current.selectionStart = ref.current.value.length
		}
	}, [ref.current?.textContent])

	const handleSubmit = () => {
		if (ref.current) {
			ref.current.value = ''
		}
		onClose()
	}

	return (
		<form className={styles.form} onSubmit={preventDefault(stopPropagation(handleSubmit))}>
			<textarea ref={ref} className={styles.input} defaultValue={`${postAuthor}, `} />

			<button
				className={styles.cancelBtn}
				onClick={preventDefault(stopPropagation(onClose))}
				type="button"
			>
        Отмена
			</button>
			<button className={styles.submitBtn} type="submit">
        Комментировать
			</button>
		</form>
	)
}
