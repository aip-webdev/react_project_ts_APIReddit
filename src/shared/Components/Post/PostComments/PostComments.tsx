import React from 'react';
import styles from './postcomments.scss';
import {SortBlock} from "../../ReusedComponents/SortBlock";
import {sortingPostComments} from "../../../../utils/lists/sortPostComments";
import {Comment} from "./Comment";
import {ICommentsData} from "../../../../hooks/usePostsWithCommentsData";


interface IPostCommentsProps {
    comments: ICommentsData[]
}

export function PostComments(props: IPostCommentsProps) {
    const {comments} = props;
    comments.pop();
    return (
        <div>
            <div className={styles.container}>
                <span className={styles.preselect}>Сортировать по:</span>
                <SortBlock
                    onSelect={() => {
                    }}
                    sortList={sortingPostComments}
                    sortBlockStyle={styles.sortBlock}
                    selectButtonStyle={styles.selectButton}
                    sortListStyle={styles.sortList}
                    listLineStyle={styles.listLine}
                />
            </div>
            <ul>
                {(comments.length > 0) && comments.map((comment) => (
                    <Comment key={`${comment.id}${comments.indexOf(comment)}`} comment={comment}/>
                ))}
            </ul>
        </div>
    );
}
