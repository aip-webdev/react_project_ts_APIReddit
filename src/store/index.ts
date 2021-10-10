import {Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_FAILURE,
    ME_REQUEST_SUCCESS,
    SET_POSTS_DATA,
    SET_POSTS_DATA_FAILURE,
    SET_POSTS_DATA_SUCCESS, SET_POSTS_WC_DATA,
    SET_POSTS_WC_DATA_FAILURE,
    SET_POSTS_WC_DATA_SUCCESS,
    SET_TOKEN,
    UPDATE_POST_COMMENT_TEXT
} from "./actions/actionTypes";
import {merge} from "ramda";
import {MeRequestAction} from "./actions/meActions/meRequest";
import {MeRequestGetErrorAction} from "./actions/meActions/meRequestGetError";
import {SetMyDataAction} from "./actions/meActions/setMyData";
import {SetTokenAction} from "./actions/tokenActions/setToken";
import {PostsRequestAction} from "./actions/postActions/postsRequest";
import {UpdateCommentFormValueAction} from "./actions/commentFormActions/updateCommentFormValue";
import {IMyState, meReducer} from "./reducers/meReducer";
import {IPostState, postReducer} from "./reducers/postReducer";
import { PostsRequestErrorAction } from "./actions/postActions/postsRequestGetError";
import {SetPostDataAction} from "./actions/postActions/setPostData";
import {PostsWCRequestAction} from "./actions/postWCActions/postsWithCommentsRequest";
import {SetPostWCDataAction} from "./actions/postWCActions/setPostWithCommentsData";
import {PostsWCRequestErrorAction} from "./actions/postWCActions/postsWithCommentsRequestGetError";
import {IPostWithCommentsState, postsWCReducer} from "./reducers/postWCReducer";

export interface IInitState {
    commentText: string;
    token: string;
    posts: IPostState;
    postWithComments: IPostWithCommentsState
    me: IMyState;
}

export const initialState: IInitState = {
    commentText: '',
    token: '',
    posts: {loading: false, error: '', postsData: []},
    postWithComments: {loading: false, error: '', postsWCData: []},
    me: { loading: false, error: '', myData: {}}
}

export type MyAction =
    UpdateCommentFormValueAction |
    SetTokenAction |
    PostsRequestAction | PostsRequestErrorAction | SetPostDataAction |
    PostsWCRequestAction | PostsWCRequestErrorAction | SetPostWCDataAction |
    MeRequestAction | SetMyDataAction |MeRequestGetErrorAction;

export const rootReducer: Reducer<IInitState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_COMMENT_TEXT:
            return merge(state, { commentText: action.payload })
        case SET_TOKEN:
            return merge(state, { token: action.payload })
        case SET_POSTS_DATA:
        case SET_POSTS_DATA_SUCCESS:
        case SET_POSTS_DATA_FAILURE:
            return merge(state, {posts: postReducer(state.posts, action)})
        case SET_POSTS_WC_DATA:
        case SET_POSTS_WC_DATA_SUCCESS:
        case SET_POSTS_WC_DATA_FAILURE:
            return merge(state, {postWithComments: postsWCReducer(state.postWithComments, action)})
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_FAILURE:
            return merge(state, {me: meReducer(state.me, action)})
    }

    return state;
}
