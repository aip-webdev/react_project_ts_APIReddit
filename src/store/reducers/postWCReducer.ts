import {Reducer} from "redux";
import {useSelector} from "react-redux";
import {PostsWCRequestAction} from "../actions/postWCActions/postsWithCommentsRequest";
import {SetPostWCDataAction} from "../actions/postWCActions/setPostWithCommentsData";
import {PostsWCRequestErrorAction} from "../actions/postWCActions/postsWithCommentsRequestGetError";
import {IPostWithCommentsData} from "../../hooks/usePostsWithCommentsData";
import {IInitState} from "../index";
import {merge} from "ramda";

export interface IPostWithCommentsState {
    loading: boolean
    postsWCData: IPostWithCommentsData[]
    error: string
}

type PostWCActions = PostsWCRequestAction | PostsWCRequestErrorAction | SetPostWCDataAction

export const postsWCReducer: Reducer<IPostWithCommentsState, PostWCActions> = (state = useSelector<IInitState, IPostWithCommentsState>(state => state.postWithComments), action) => {
    switch (action.type) {
        case "SET_POSTS_WC_DATA":
            return merge(state, {loading: true})

        case "SET_POSTS_WC_DATA_SUCCESS":
            return merge(state, {loading: false, postsWCData: action.payload})
        case "SET_POSTS_WC_DATA_FAILURE":
            return merge(state, {loading: false, error: action.error})
        default:
            return state;
    }
}
