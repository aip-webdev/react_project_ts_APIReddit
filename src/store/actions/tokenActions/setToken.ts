import {Action, ActionCreator, AnyAction} from "redux";
import {SET_TOKEN} from "../actionTypes";
import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";

export type SetTokenAction = {
    type: typeof SET_TOKEN;
    payload: string
}

const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token
});

export const saveToken = (): ThunkAction<void, IInitState, unknown, SetTokenAction> =>(dispatch ) =>{
    const token = localStorage.getItem('reddit-token') || window.__token__;
    dispatch(setToken(token));
    if (window.__token__.toString() !== 'undefined' && !localStorage.getItem('reddit-token')) {
        localStorage.setItem('reddit-token', window.__token__);
    }
}
