import {
    UPDATE_POST_COMMENT_TEXT,
    UpdateCommentFormValueAction
} from "../actions/commentFormActions/updateCommentFormValue";
import {SET_TOKEN, SetTokenAction} from "../actions/tokenActions/setToken";
import {FETCH_POSTS, FetchPostsAction} from "../actions/postActions/fetchPosts";
import {FETCH_POSTS_FAILURE, FetchPostsErrorAction} from "../actions/postActions/fetchPostsError";
import {FETCH_POSTS_SUCCESS, SetPostsAction} from "../actions/postActions/fetchPostsSuccess";
import {FETCH_POSTS_WC, FetchPostsWCAction} from "../actions/postWCActions/fetchPostsWithComments";
import {FETCH_POSTS_WC_FAILURE, FetchPostsWCErrorAction} from "../actions/postWCActions/fetchPostsWithCommentsError";
import {FETCH_POSTS_WC_SUCCESS, SetPostWCAction} from "../actions/postWCActions/fetchPostsWithCommentsSuccess";
import {FETCH_MY_DATA, FetchMyDataAction} from "../actions/meActions/fetchMyData";
import {FETCH_MY_DATA_SUCCESS, SetMyDataAction} from "../actions/meActions/setMyData";
import {FETCH_MY_DATA_FAILURE, FetchMyDataErrorAction} from "../actions/meActions/fetchMyDataError";
import {Reducer} from "redux";

import {merge} from "ramda";
import {postReducer} from "./postReducer";
import {postsWCReducer} from "./postWCReducer";
import {meReducer} from "./meReducer";
import {IInitState, initialState} from "../index";
import {SET_POSTS_TYPE, SetPostsTypeAction} from "../actions/postTypeAction";

export type MyAction =
    UpdateCommentFormValueAction |
    SetTokenAction |
    FetchPostsAction | FetchPostsErrorAction | SetPostsAction |
    FetchPostsWCAction | FetchPostsWCErrorAction | SetPostWCAction |
    FetchMyDataAction | SetMyDataAction | FetchMyDataErrorAction | SetPostsTypeAction

export const rootReducer: Reducer<IInitState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_COMMENT_TEXT:
            return merge(state, {commentText: action.payload})
        case SET_TOKEN:
            return merge(state, {token: action.payload})
        case SET_POSTS_TYPE:
            return merge(state, {
                posts: action.payload.posts,
                postsType: action.payload.postsType
            })
        case FETCH_POSTS:
        case FETCH_POSTS_SUCCESS:
        case FETCH_POSTS_FAILURE:
            return merge(state, {posts: postReducer(state.posts, action)})
        case FETCH_POSTS_WC:
        case FETCH_POSTS_WC_SUCCESS:
        case FETCH_POSTS_WC_FAILURE:
            return merge(state, {postWithComments: postsWCReducer(state.postWithComments, action)})
        case FETCH_MY_DATA:
        case FETCH_MY_DATA_SUCCESS:
        case FETCH_MY_DATA_FAILURE:
            return merge(state, {me: meReducer(state.me, action)})
    }
    return state;
}
