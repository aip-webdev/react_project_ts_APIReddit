import React, {useContext} from 'react';
import styles from './header.scss';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {UserBlock} from "./UserBlock";
import {userContext} from "../context/userContext";


export function Header() {
  const { iconImg, name } = useContext(userContext)
  return (
      <header className={styles.header}>
          <div className={styles.headersBlock}>
              <SearchBlock />
              <UserBlock avatarSrc={ iconImg } userName={ name  }/>
          </div>
        <ThreadTitle />
        <SortBlock />
      </header>
  );
}
