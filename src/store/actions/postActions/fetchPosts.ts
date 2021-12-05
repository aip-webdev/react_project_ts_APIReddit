import {ActionCreator} from "redux";

export const FETCH_POSTS = 'FETCH_POSTS';

export type FetchPostsAction = {
    type: typeof FETCH_POSTS;
    payload?: string;
}

export const fetchPosts: ActionCreator<FetchPostsAction> = () => ({
    type: FETCH_POSTS,
});
