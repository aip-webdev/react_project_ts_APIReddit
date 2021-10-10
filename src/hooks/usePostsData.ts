import {useEffect} from "react";
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



export function usePostsData() {
    const postsData = useSelector<IInitState, IPostData[]>( state => state.posts.postsData);
    const loading = useSelector<IInitState, boolean>( state => state.posts.loading);
    const token = useSelector<IInitState, string>( state => state.token);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) dispatch(postsRequestAsync())
    }, [token])

    return {postsData, loading}
}
