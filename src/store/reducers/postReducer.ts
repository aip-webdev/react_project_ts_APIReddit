import {Reducer} from "redux";
import {useSelector} from "react-redux";
import {IInitState} from "../index";
import {PostsRequestAction} from "../actions/postActions/postsRequest";
import {PostsRequestErrorAction} from "../actions/postActions/postsRequestGetError";
import {SetPostDataAction} from "../actions/postActions/setPostData";
import {IPostData} from "../../hooks/usePostsData";

export interface IPostState {
    loading: boolean
    postsData: IPostData[]
    error: string
}
type PostActions = PostsRequestAction | PostsRequestErrorAction | SetPostDataAction;


export const postReducer: Reducer<IPostState, PostActions> = (state = useSelector<IInitState, IPostState>( state => state.posts), action) => {
    switch (action.type) {
        case "SET_POSTS_DATA":
            return {
                ...state,
                loading: true
            }
        case "SET_POSTS_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                postsData: action.payload
            }
        case "SET_POSTS_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
