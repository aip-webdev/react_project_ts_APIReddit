import React, {useContext} from 'react';
import styles from './header.scss';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {UserBlock} from "./UserBlock";
import {userContext} from "../context/userContext";
import {EIcon, Icon} from "../Components/Icon";
import {Mails} from "./Mails";


export function Header() {
  const { iconImg, name } = useContext(userContext)
  return (
      <header className={styles.header}>
          <div className={styles.headersBlock}>
              <Mails />
              <SearchBlock />
              <UserBlock avatarSrc={ iconImg } userName={ name  }/>
          </div>
        <ThreadTitle />
        <SortBlock />
      </header>
  );
}
