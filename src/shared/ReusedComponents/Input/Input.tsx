import React from 'react';
import styles from './input.scss';

interface IInputProps {
    placeholder: string
}

export function Input({placeholder}: IInputProps) {
    return (
        <form className={styles.form} method="post" action="#" encType="multipart/form-data">
            <input className={styles.input} type="text" placeholder={placeholder}/>
        </form>
    );
}
