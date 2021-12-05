import {Reducer} from "redux";
import {useSelector} from "react-redux";
import {FETCH_POSTS_WC, FetchPostsWCAction} from "../actions/postWCActions/fetchPostsWithComments";
import {FETCH_POSTS_WC_SUCCESS, SetPostWCAction} from "../actions/postWCActions/fetchPostsWithCommentsSuccess";
import {FETCH_POSTS_WC_FAILURE, FetchPostsWCErrorAction} from "../actions/postWCActions/fetchPostsWithCommentsError";
import {IPostWithCommentsData} from "../../hooks/usePostsWithCommentsData";
import {IInitState} from "../index";
import {merge} from "ramda";

export interface IPostWithCommentsState {
    loading: boolean
    postsWCData: IPostWithCommentsData[]
    error: string
}

type PostWCActions = FetchPostsWCAction | FetchPostsWCErrorAction | SetPostWCAction

export const postsWCReducer: Reducer<IPostWithCommentsState, PostWCActions> = (state = useSelector<IInitState, IPostWithCommentsState>(state => state.postWithComments), action) => {
    switch (action.type) {
        case FETCH_POSTS_WC:
            return merge(state, {loading: true})
        case FETCH_POSTS_WC_SUCCESS:
            return merge(state, {loading: false, postsWCData: action.payload})
        case FETCH_POSTS_WC_FAILURE:
            return merge(state, {loading: false, error: action.error})
        default:
            return state;
    }
}
