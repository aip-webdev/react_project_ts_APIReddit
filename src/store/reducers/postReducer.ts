import {Reducer} from "redux";
import {useSelector} from "react-redux";
import {IInitState} from "../index";
import {PostsRequestAction} from "../actions/postActions/postsRequest";
import {PostsRequestErrorAction} from "../actions/postActions/postsRequestGetError";
import {SetPostDataAction} from "../actions/postActions/setPostData";
import {IPostData} from "../../hooks/usePostsData";
import {merge} from "ramda";

export interface IPostState {
    loading: boolean
    postsData: IPostData[]
    error: string
    after: string;
}

type PostActions = PostsRequestAction | PostsRequestErrorAction | SetPostDataAction;


export const postReducer: Reducer<IPostState, PostActions> = (state = useSelector<IInitState, IPostState>(state => state.posts), action) => {
    switch (action.type) {
        case "SET_POSTS_DATA":
            return merge(state, {loading: true})

        case "SET_POSTS_DATA_SUCCESS":

            return merge(state, {
                loading: false,
                postsData: [...state.postsData, ...action.payload.postData],
                after: action.payload.after
            })

        case "SET_POSTS_DATA_FAILURE":
            return merge(state, {
                loading: false,
                error: action.error
            })
        default:
            return state;
    }
}
