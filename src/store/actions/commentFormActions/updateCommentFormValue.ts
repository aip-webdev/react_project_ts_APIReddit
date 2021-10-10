import {ActionCreator} from "redux";
import {UPDATE_POST_COMMENT_TEXT} from "../actionTypes";

export type UpdateCommentFormValueAction = {
    type: typeof UPDATE_POST_COMMENT_TEXT;
    payload: string;
}

export const updateCommentFormValue: ActionCreator<UpdateCommentFormValueAction> = (text: string) => ({
    type: UPDATE_POST_COMMENT_TEXT,
    payload: text
});
