import {SET_POSTS_DATA_FAILURE} from "../actionTypes";
import {ActionCreator} from "redux";

export type PostsRequestErrorAction = {
    type: typeof SET_POSTS_DATA_FAILURE;
    payload?: string;
    error: string;
}

export const postsRequestGetError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
    type: SET_POSTS_DATA_FAILURE,
    error: error,
});
