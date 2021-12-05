import {ActionCreator} from "redux";

export const FETCH_MY_DATA = 'FETCH_MY_DATA';

export type FetchMyDataAction = {
    type: typeof FETCH_MY_DATA;
    payload?: string;
}

export const fetchMyData: ActionCreator<FetchMyDataAction> = () => ({
    type: FETCH_MY_DATA,
});
