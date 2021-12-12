import React, {useRef} from 'react';
import styles from './cardlist.scss';
import {Card} from "./Card";
import {usePostsData} from "../../../hooks/usePostsData";
import {usePostsWithCommentsData} from "../../../hooks/usePostsWithCommentsData";
import {useDispatch} from "react-redux";
import {postsRequestAsync} from "../../../store/actions/postActions";
import {Loading} from "../ReusedComponents/Loading";
import {Controls} from "./Card/Controls";
import {Menu} from "./Card/Menu";
import {useMediaSize} from "../../../hooks/useMediaSize";

export function CardList() {
    let bottomOfList = useRef(null);
    const dispatch = useDispatch();
    const [isMediaMobile] = useMediaSize();
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
                {(
                    (postsData.length % 60 === 0 && postsData.length !== 0) ||
                    (postsData.length % 20 === 0 && isMediaMobile)
                ) &&
                <button className={styles.loadMore} onClick={handleClick}>Загрузить ещё</button>
                }
                <div ref={bottomOfList}/>
            </ul>
            <ul className={styles.cardList}>
                {Array.apply(null, Array(20)).map((value: unknown, index: number) =>
                    (loading &&
                        <li className={styles.emptyCard} key={(index * index)+1}>
                            <div className={styles.emptyTextBox}>
                                <span className={styles.emptySpan}/>
                                <span className={styles.emptySpan}/>
                                <span className={styles.emptySpan}/>
                            </div>
                            <div className={styles.emptyImg}/>
                            <Controls karmaCount={0} commentsCount={0}/>
                            <Menu/>
                        </li>
                    ))}
            </ul>
        </>
    );
}
