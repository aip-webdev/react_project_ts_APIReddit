import {ActionCreator} from "redux";
import {ME_REQUEST} from "../actionTypes";

export type MeRequestAction = {
    type: typeof ME_REQUEST;
    payload?: string;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST,
});
