import {Reducer} from "redux";
import {useSelector} from "react-redux";
import {IInitState} from "../index";
import {FETCH_POSTS, FetchPostsAction} from "../actions/postActions/fetchPosts";
import {FETCH_POSTS_FAILURE, FetchPostsErrorAction} from "../actions/postActions/fetchPostsError";
import {FETCH_POSTS_SUCCESS, SetPostsAction} from "../actions/postActions/fetchPostsSuccess";
import {IPostData} from "../../hooks/usePostsData";
import {merge} from "ramda";

export interface IPostState {
    loading: boolean
    postsData: IPostData[]
    error: string
    after: string;
}

type PostActions = FetchPostsAction | FetchPostsErrorAction | SetPostsAction;


export const postReducer: Reducer<IPostState, PostActions> = (state = useSelector<IInitState, IPostState>(state => state.posts), action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return merge(state, {loading: true})

        case FETCH_POSTS_SUCCESS:
            return merge(state, {
                loading: false,
                postsData: [...state.postsData, ...action.payload.postData],
                after: action.payload.after
            });

        case FETCH_POSTS_FAILURE:
            return merge(state, {
                loading: false,
                error: action.error
            })
        default:
            return state;
    }
}
