import React from 'react';
import styles from './header.scss';

import {sortingPostList} from "../../../utils/lists/sortPostCategory";
import {Mails} from "./Mails";
import {SearchBlock} from "./SearchBlock";
import {UserBlock} from "./UserBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "../ReusedComponents/SortBlock";
import {useDispatch} from "react-redux";
import {setPostType} from "../../../store/actions/postTypeAction";

export function Header() {
    const dispatch = useDispatch();
    return (
        <header id="js-header" className={styles.header}>
            <div className={styles.headersBlock}>
                <Mails/>
                <SearchBlock/>
                <UserBlock/>
            </div>
            <ThreadTitle/>
            <SortBlock onSelect={(type) => dispatch(setPostType(type))} sortList={sortingPostList}/>
        </header>
    );
}
