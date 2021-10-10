import {ActionCreator} from "redux";
import {SET_POSTS_WC_DATA} from "../actionTypes";

export type PostsWCRequestAction = {
    type: typeof SET_POSTS_WC_DATA;
    payload?: string;
}

export const postsWCRequest: ActionCreator<PostsWCRequestAction> = () => ({
    type: SET_POSTS_WC_DATA,
});
