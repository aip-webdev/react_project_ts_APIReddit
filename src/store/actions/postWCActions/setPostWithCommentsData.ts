import {ActionCreator} from "redux";
import {SET_POSTS_WC_DATA_SUCCESS} from "../actionTypes";
import {IPostWithCommentsData} from "../../../hooks/usePostsWithCommentsData";

export type SetPostWCDataAction = {
    type: typeof SET_POSTS_WC_DATA_SUCCESS;
    payload: IPostWithCommentsData[];
}

export const setPostsWCData: ActionCreator<SetPostWCDataAction> = (postsData: IPostWithCommentsData[]) => ({
    type: SET_POSTS_WC_DATA_SUCCESS,
    payload: postsData
});
