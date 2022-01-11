import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent } from 'react';
import * as Yup from 'yup';
import { CommentFormActions } from '../PostCommentForm/CommentFormActions';
import styles from './postcommentformik.scss';

const PostCommentFormSchema = Yup.object().shape({
	comment: Yup.string()
		.min(2, "Let's turn it around")
		.max(50, "Let's keep it short")
		.required('Required'),
})

interface IPostCommentFormProps {
	name?: string
	value: string
	onSubmit: (event: Event) => void
	onChange: (value: string) => void
}

export const PostCommentFormik = ({ onChange, onSubmit, name, value }: IPostCommentFormProps) => {
	const handlerChange = (value: string) => {
		onChange(value)
	}

	return (
		<Formik
			initialValues={{ comment: value }}
			validationSchema={PostCommentFormSchema}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values))
					onSubmit(new Event('FormEvent'))
				}, 400)
				// eslint-disable-next-line no-lone-blocks
				{
					actions.setSubmitting(false)
					actions.resetForm({
						values: {
							comment: '',
						},
					})
				}
			}}
			render={({ errors, touched, values, handleChange }) =>
				<Form className={styles.form}>
					<label className={styles.label} htmlFor="comment">
						<Field
							className={styles.input}
							name="comment"
							placeholder={`${name || 'Уважаемый'}, оставьте ваш комментарий`}
							type="text"
							value={values.comment}
							onChange={(event: ChangeEvent) => {
								handleChange(event)
								handlerChange(values.comment)
							}}
						/>
						{errors.comment && touched.comment &&
              <div className={styles.fieldError}>{errors.comment}</div>
						}
					</label>

					<CommentFormActions />

					<button className={styles.submitBtn} type="submit">
            Комментировать
					</button>
				</Form>
			}
		/>
	)
}
