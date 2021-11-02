import {ActionCreator} from "redux";
import {SET_TOKEN} from "../actionTypes";

export type SetTokenAction = {
    type: typeof SET_TOKEN;
    payload: string
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token
});

