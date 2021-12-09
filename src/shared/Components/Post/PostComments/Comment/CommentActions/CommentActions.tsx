import React from 'react';
import styles from './commentactions.scss';
import {Comments} from "../../../../CardList/Card/Controls/Comments";
import {Share} from "../../../../CardList/Card/Controls/Actions/Share";
import {Complain} from "../../../../CardList/Card/Controls/Actions/Complain";
import {useMediaSize} from "../../../../../../hooks/useMediaSize";


interface ICommentActionsProps {
    handleClick: () => void;
}

export function CommentActions({handleClick}: ICommentActionsProps) {
    const [isMediaSize,] = useMediaSize();
    return (
        <div className={styles.postActions}>
            <Comments
                onclick={handleClick}
                textHide={isMediaSize}
                text='Ответить'
                btnClassName={styles.actionButton}
            />
            <Share textHide={isMediaSize} btnClassName={styles.actionButton}/>
            <Complain textHide={isMediaSize} btnClassName={styles.actionButton}/>
        </div>
    );
}
