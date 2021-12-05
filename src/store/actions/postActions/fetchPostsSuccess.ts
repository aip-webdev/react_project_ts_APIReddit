import {ActionCreator} from "redux";
import {IPostData} from "../../../hooks/usePostsData";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export type SetPostsAction = {
    type: typeof FETCH_POSTS_SUCCESS;
    payload: {
        postData: IPostData[],
        after: string
    };
}

export const setPosts: ActionCreator<SetPostsAction> = (postData: IPostData[], after: string) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: {postData: postData, after: after}
});
