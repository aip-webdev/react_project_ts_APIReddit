import React, { FormEvent, useEffect, useRef } from 'react';
import { preventDefault } from '../../../../utils/react/preventDefault';
import { stopPropagation } from '../../../../utils/react/stopPropagation';
import { CommentFormActions } from './CommentFormActions';
import styles from './postcommentform.scss';

interface IPostCommentFormProps {
	name?: string
	value: string
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
	onChange: (value: string) => void
}

export const PostCommentForm = ({ onChange, onSubmit, name, value }: IPostCommentFormProps) => {
	const ref = useRef<HTMLLabelElement>(null)
	useEffect(() => {
		handleChange(value, ref.current)
	}, [])

	const handleChange = (value: string, el: HTMLLabelElement | null) => {
		if (el) {
			if (name) {
				el.hidden = value !== ''
			} else {
				el.hidden = true
			}
		}
		onChange(value)
	}

	return (
		<form
			className={styles.form}
			onSubmit={preventDefault(
				stopPropagation((event: FormEvent<HTMLFormElement>) => onSubmit(event)),
			)}
		>
			<textarea
				className={styles.input}
				value={value}
				onChange={event => handleChange(event.target.value, ref.current)}
			/>

			<label ref={ref} className={styles.label}>
				<span className={styles.username}>{name}, оставьте ваш комментарий</span>
			</label>

			<CommentFormActions />

			<button className={styles.submitBtn} type="submit">
        Комментировать
			</button>
		</form>
	)
}
