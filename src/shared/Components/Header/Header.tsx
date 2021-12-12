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
import {useMediaSize} from "../../../hooks/useMediaSize";

export function Header() {
    const dispatch = useDispatch();
    const [isMediaMobile] = useMediaSize();
    return (
        <header id="js-header" className={styles.header}>
            <div className={styles.headersBlock}>
                <Mails/>
                <SearchBlock/>
                <UserBlock/>
            </div>
            {!isMediaMobile && <ThreadTitle/>}
            <SortBlock onSelect={(type) => dispatch(setPostType(type))} sortList={sortingPostList}/>
        </header>
    );
}
