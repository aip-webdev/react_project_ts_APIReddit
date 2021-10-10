import {Action, ActionCreator, AnyAction} from "redux";
import {SET_TOKEN} from "../actionTypes";
import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";

export type SetTokenAction = {
    type: typeof SET_TOKEN;
    payload: string
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token
});

