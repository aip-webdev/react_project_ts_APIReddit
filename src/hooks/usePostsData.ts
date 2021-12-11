import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IInitState} from "../store";
import {postsRequestAsync} from "../store/actions/postActions";

export interface IPostData {
    id: string;
    author: string;
    author_url?: string;
    author_img?: string;
    count_comments: number;
    count_karma: number;
    created: Date;
    post_url?: string;
    self_text?: string;
    title?: string;
    topic_name?: string;
    url: string;
    upvote_ratio?: number;
}

export function usePostsData(bottomOfList: React.RefObject<HTMLElement>) {
    const postsData = useSelector<IInitState, IPostData[]>(state => state.posts.postsData);
    const loading = useSelector<IInitState, boolean>(state => state.posts.loading);
    const after = useSelector<IInitState, string>(state => state.posts.after);
    const type = useSelector<IInitState, string>(state => state.postsType);
    const dispatch = useDispatch();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && (postsData.length % 60 !== 0 || postsData.length === 0)) {
                dispatch(postsRequestAsync())
            }
        }, {
            rootMargin: '40px'
        });
        if (!!bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }
        return () => {
            if (!!bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [bottomOfList.current, after, postsData, type])
    return {postsData, loading}
}
