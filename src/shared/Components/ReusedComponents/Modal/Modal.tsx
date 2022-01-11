import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useMouseEventAction } from '../../../../hooks/useMouseEventAction';
import styles from './modal.scss';

interface IModalProps {
	children: React.ReactNode
}

export function Modal({ children }: IModalProps) {
	const [node, setNode] = useState<Element>()
	const ref = useRef(null)
	const navigate = useNavigate()
	useEffect(() => {
		setNode(document.querySelector('#modal__root') ?? undefined)
	}, [])

	useMouseEventAction({ action: () => navigate(-1), ref })
	if (!node) {
		return null
	}
	return ReactDOM.createPortal(
		<div className={styles.modalBack}>
			<div ref={ref} className={styles.modal}>
				{children}
			</div>
		</div>,
		node,
	)
}
