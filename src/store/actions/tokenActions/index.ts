import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {setToken, SetTokenAction} from "./setToken";

export const saveToken = (): ThunkAction<void, IInitState, unknown, SetTokenAction> => (dispatch) => {
    let localStorageToken = localStorage.getItem('reddit-token');
    let token = localStorageToken || window.__token__;

    if (token !== 'undefined' && !localStorageToken) {
        localStorage.setItem('reddit-token', token);
        dispatch(setToken(token))
    } else if (token !== 'undefined') dispatch(setToken(token))


}

