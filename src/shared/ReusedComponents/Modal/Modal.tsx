import React, {useRef} from 'react';
import styles from './modal.scss';
import ReactDOM from "react-dom";
import {useMouseEventAction} from "../../../hooks/useMouseEventAction";

interface IModalProps {
    children: React.ReactNode;
    onClose?: () => void;
}

export function Modal({children, onClose}: IModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    useMouseEventAction({onClose, ref});

    const node = document.querySelector('#modal__root');
    if (!node) return null;

    return ReactDOM.createPortal((
            <div className={styles.modalBack}>
                <div className={styles.modal} ref={ref}>
                    {children}
                </div>
            </div>

        ), node
    );
}
