import React from 'react';
import styles from './header.scss';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "../ReusedComponents/SortBlock";
import {UserBlock} from "./UserBlock";

import {Mails} from "./Mails";
import {sortingPostList} from "../../utils/lists/sortPostCategory";

export function Header() {
    return (
        <header id="js-header" className={styles.header}>
            <div className={styles.headersBlock}>
                <Mails/>
                <SearchBlock/>
                <UserBlock/>
            </div>
            <ThreadTitle/>
            <SortBlock sortList={sortingPostList}/>
        </header>
    );
}
