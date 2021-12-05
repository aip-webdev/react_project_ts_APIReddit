import {ActionCreator} from "redux";

export const UPDATE_POST_COMMENT_TEXT = 'UPDATE_POST_COMMENT_TEXT';

export type UpdateCommentFormValueAction = {
    type: typeof UPDATE_POST_COMMENT_TEXT;
    payload: string;
}

export const updateCommentFormValue: ActionCreator<UpdateCommentFormValueAction> = (text: string) => ({
    type: UPDATE_POST_COMMENT_TEXT,
    payload: text
});
