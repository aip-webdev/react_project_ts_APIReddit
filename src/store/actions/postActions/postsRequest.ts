import {ActionCreator} from "redux";
import {SET_POSTS_DATA} from "../actionTypes";

export type PostsRequestAction = {
    type: typeof SET_POSTS_DATA;
    payload?: string;
}

export const postRequest: ActionCreator<PostsRequestAction> = () => ({
    type: SET_POSTS_DATA,
});
