import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './loading.scss';

export function Loading() {
	const [node, setNode] = useState<Element>()
	useEffect(() => {
		setNode(document.querySelector('#modal__root') ?? undefined)
	}, [])
	if (!node) {
		return null
	}
	return ReactDOM.createPortal(
		<div className={styles.container}>
			<div className={styles.loader}>
				<div className={styles.text}>Loading</div>
				<div className={styles.dots}>
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</div>,
		node,
	)
}
