import React from 'react';
import styles from './layout.scss';

interface ILayoutProps {
	children?: React.ReactNode
}

export const Layout = ({ children }: ILayoutProps) => <div className={styles.layout}>{children}</div>
