import React from 'react';
import styles from './content.scss';
import {setContentElHeight} from "../../../hooks/setContentElHeight";

interface IContentProps {
    children?: React.ReactNode;
}

export function Content({children}: IContentProps) {
    setContentElHeight();
    return (
        <main id="js-content" className={styles.content}>
            {children}
        </main>
    );
}
