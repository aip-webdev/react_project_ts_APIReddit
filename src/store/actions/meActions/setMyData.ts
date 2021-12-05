import {ActionCreator} from "redux";
import {IUserData} from "../../../hooks/useUserData";

export const FETCH_MY_DATA_SUCCESS = 'FETCH_MY_DATA_SUCCESS';

export type SetMyDataAction = {
    type: typeof FETCH_MY_DATA_SUCCESS;
    payload: IUserData;
}

export const setMyData: ActionCreator<SetMyDataAction> = (userData: IUserData) => ({
    type: FETCH_MY_DATA_SUCCESS,
    payload: userData
});
