import {ActionCreator} from "redux";

export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export type FetchPostsErrorAction = {
    type: typeof FETCH_POSTS_FAILURE;
    payload?: string;
    error: string;
}

export const fetchPostsError: ActionCreator<FetchPostsErrorAction> = (error: string) => ({
    type: FETCH_POSTS_FAILURE,
    error: error,
});
