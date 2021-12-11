import React, {useRef} from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";
import {usePostsData} from "../../../hooks/usePostsData";
import {usePostsWithCommentsData} from "../../../hooks/usePostsWithCommentsData";
import {useDispatch} from "react-redux";
import {postsRequestAsync} from "../../../store/actions/postActions";
import {Loading} from "../ReusedComponents/Loading";

export function CardList() {
    let bottomOfList = useRef(null);
    const dispatch = useDispatch();

    const {postsData, loading} = usePostsData(bottomOfList);
    usePostsWithCommentsData();

    const handleClick = () => dispatch(postsRequestAsync());

    return (
        <>
            <ul className={styles.cardList}>
                {loading && <Loading/>}
                {postsData && postsData.map((post) => (
                    <Card key={post.id} post={post}/>
                ))}
                {postsData.length % 60 === 0 && postsData.length !== 0 &&
                <button className={styles.loadMore} onClick={handleClick}>Загрузить ещё</button>
                }
                <div ref={bottomOfList}/>
            </ul>
            <ul className={styles.cardList}>
                {Array.apply(null, Array(20)).map((value: unknown, index: number) =>
                    (loading &&
                        <div className={styles.emptyCard} key={(index*index) + 1} >
                            <div className={styles.emptyImg}/>
                            <div className={styles.emptyTextBox}>
                                <span className={styles.emptySpan}/>
                                <span className={styles.emptySpan}/>
                                <span className={styles.emptySpan}/>
                            </div>
                        </div>
                ))}
            </ul>
        </>
    );
}
