import {ActionCreator} from "redux";
import {IPostWithCommentsData} from "../../../hooks/usePostsWithCommentsData";

export const FETCH_POSTS_WC_SUCCESS = 'FETCH_POSTS_WC_SUCCESS';

export type SetPostWCAction = {
    type: typeof FETCH_POSTS_WC_SUCCESS;
    payload: IPostWithCommentsData[];
}

export const setPostsWC: ActionCreator<SetPostWCAction> = (postsData: IPostWithCommentsData[]) => ({
    type: FETCH_POSTS_WC_SUCCESS,
    payload: postsData
});
