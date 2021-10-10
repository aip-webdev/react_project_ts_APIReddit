import {SET_POSTS_WC_DATA_FAILURE} from "../actionTypes";
import {ActionCreator} from "redux";

export type PostsWCRequestErrorAction = {
    type: typeof SET_POSTS_WC_DATA_FAILURE;
    payload?: string;
    error: string;
}

export const postsWCRequestGetError: ActionCreator<PostsWCRequestErrorAction> = (error: string) => ({
    type: SET_POSTS_WC_DATA_FAILURE,
    error: error,
});
