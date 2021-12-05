import {ActionCreator} from "redux";

export const FETCH_MY_DATA_FAILURE = 'FETCH_MY_DATA_FAILURE';

export type FetchMyDataErrorAction = {
    type: typeof FETCH_MY_DATA_FAILURE;
    payload?: string;
    error: string;
}

export const fetchMyDataError: ActionCreator<FetchMyDataErrorAction> = (error: string) => ({
    type: FETCH_MY_DATA_FAILURE,
    error: error,
});
