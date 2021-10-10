import {ActionCreator} from "redux";
import {ME_REQUEST_SUCCESS} from "../actionTypes";
import {IUserData} from "../../../hooks/useUserData";

export type SetMyDataAction = {
    type: typeof ME_REQUEST_SUCCESS;
    payload: IUserData;
}

export const setMyData: ActionCreator<SetMyDataAction> = (userData: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    payload: userData
});
