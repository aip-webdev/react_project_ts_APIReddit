import React, {ReactNode, useEffect, useState} from 'react';
import styles from './dropdown.scss';

interface IDropdownProps {
    button: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
    const [isDropdownOpen, setIsDropDownOpen] = useState(isOpen);
    useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropDownOpen(!isDropdownOpen);
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
