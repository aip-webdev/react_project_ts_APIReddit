import {ActionCreator} from "redux";

export const FETCH_POSTS_WC_FAILURE = 'FETCH_POSTS_WC_FAILURE';

export type FetchPostsWCErrorAction = {
    type: typeof FETCH_POSTS_WC_FAILURE;
    payload?: string;
    error: string;
}

export const fetchPostsWCError: ActionCreator<FetchPostsWCErrorAction> = (error: string) => ({
    type: FETCH_POSTS_WC_FAILURE,
    error: error,
});
