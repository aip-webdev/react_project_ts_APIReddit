import {useEffect} from "react";
import {IPostData} from "./usePostsData";
import {useDispatch, useSelector} from "react-redux";
import {postsWCRequestAsync} from "../store/actions/postWCActions";
import {IInitState} from "../store";

export interface ICommentsData {
    id: string;
    author: string;
    author_url?: string;
    comment_body: string;
    count_karma: number;
    created: Date;
    replies: ICommentsData[] | undefined;
}

export interface IPostWithCommentsData {
    id: string;
    author: string;
    author_url?: string;
    author_img?: string;
    count_comments: number;
    count_karma: number;
    comments?: ICommentsData[],
    created: Date;
    post_url?: string;
    self_text?: string;
    title?: string;
    topic_name?: string;
    url: string;
    upvote_ratio?: number;
}

export function usePostsWithCommentsData() {
    const postsWCData = useSelector<IInitState, IPostWithCommentsData[]>( state => state.postWithComments.postsWCData);
    const postsData = useSelector<IInitState, IPostData[]>( state => state.posts.postsData);
    const loading = useSelector<IInitState, boolean>( state => state.postWithComments.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!postsData) return;
        dispatch(postsWCRequestAsync());
    }, [postsData]);

    return {loading, postsWCData}
}
