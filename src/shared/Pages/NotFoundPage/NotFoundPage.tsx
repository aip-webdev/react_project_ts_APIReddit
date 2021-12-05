import React from 'react';
import styles from "./notfoundpage.scss";
import {Link} from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className={styles.pageBox}>
            <h1 className={styles.headText}>
                {`PAGE NOT FOUND`}
                <span className={styles.smallText}> Go to
                    <Link className={styles.homeLink} to='/'>Home page</Link>
                </span>
            </h1>
        </div>
    );
}
