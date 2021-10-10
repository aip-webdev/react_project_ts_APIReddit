import React from 'react';
import styles from './commentactions.scss';
import {Comments} from "../../../../CardList/Card/Controls/Comments";
import {Share} from "../../../../CardList/Card/Controls/Actions/Share";
import {Complain} from "../../../../CardList/Card/Controls/Actions/Complain";


interface ICommentActionsProps {
    handleClick: () => void;
}

export function CommentActions({handleClick}: ICommentActionsProps) {
  return (
      <div className={styles.postActions}>
        <Comments
            onclick={handleClick}
            textHide={false}
            text='Ответить'
            btnClassName={styles.actionButton}
        />
        <Share textHide={false} btnClassName={styles.actionButton}/>
        <Complain textHide={false} btnClassName={styles.actionButton}/>
      </div>
  );
}
