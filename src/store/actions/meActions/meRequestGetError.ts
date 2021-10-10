import {ActionCreator} from "redux";
import {ME_REQUEST_FAILURE} from "../actionTypes";

export type MeRequestGetErrorAction = {
    type: typeof ME_REQUEST_FAILURE;
    payload?: string;
    error: string;
}

export const meRequestGetError: ActionCreator<MeRequestGetErrorAction> = (error: string) => ({
    type: ME_REQUEST_FAILURE,
    error: error,
});
