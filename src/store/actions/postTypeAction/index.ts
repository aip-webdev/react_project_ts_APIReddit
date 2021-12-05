import {ActionCreator} from "redux";

import {IPostState} from "../../reducers/postReducer";

export const SET_POSTS_TYPE = 'SET_POSTS_TYPE';
export type SetPostsTypeAction = {
    type: typeof SET_POSTS_TYPE;
    payload: {
        postsType: string,
        posts: IPostState
    };
}

export const setPostType: ActionCreator<SetPostsTypeAction> = (postsType) => ({
    type: SET_POSTS_TYPE,
    payload: {
        postsType,
        posts: {loading: false, error: '', postsData: [], after: ''}
    }
})