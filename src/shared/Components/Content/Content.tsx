import React from 'react';
import { useContentElHeight } from '../../../hooks/useContentElHeight';
import styles from './content.scss';

interface IContentProps {
	children?: React.ReactNode
}

export const Content = ({ children }: IContentProps) => {
	useContentElHeight()
	return (
		<main id="js-content" className={styles.content}>
			{children}
		</main>
	)
}
