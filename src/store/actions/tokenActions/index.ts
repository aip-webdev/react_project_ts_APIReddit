import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {setToken, SetTokenAction} from "./setToken";

export const saveToken = (): ThunkAction<void, IInitState, unknown, SetTokenAction> =>(dispatch ) =>{
    const token = localStorage.getItem('reddit-token') ? localStorage.getItem('reddit-token') : window.__token__;
    dispatch(setToken(token));
    if (window.__token__.toString() !== 'undefined' && !localStorage.getItem('reddit-token')) {
        localStorage.setItem('reddit-token', window.__token__);
    }
}
