import {ActionCreator} from "redux";

export const FETCH_POSTS_WC = 'FETCH_POSTS_WC';

export type FetchPostsWCAction = {
    type: typeof FETCH_POSTS_WC;
    payload?: string;
}

export const fetchPostsWC: ActionCreator<FetchPostsWCAction> = () => ({
    type: FETCH_POSTS_WC,
});
