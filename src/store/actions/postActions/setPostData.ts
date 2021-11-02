import {ActionCreator} from "redux";
import {SET_POSTS_DATA_SUCCESS} from "../actionTypes";

import {IPostData} from "../../../hooks/usePostsData";

export type SetPostDataAction = {
    type: typeof SET_POSTS_DATA_SUCCESS;
    payload: {
        postData: IPostData[],
        after: string
    };
}

export const setPostsData: ActionCreator<SetPostDataAction> = (postData: IPostData[], after: string) => ({
    type: SET_POSTS_DATA_SUCCESS,
    payload: {postData: postData, after: after}
});
