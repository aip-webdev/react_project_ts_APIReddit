import {Reducer} from "redux";
import {IUserData} from "../../hooks/useUserData";
import {MeRequestAction} from "../actions/meActions/meRequest";
import {MeRequestGetErrorAction} from "../actions/meActions/meRequestGetError";
import {SetMyDataAction} from "../actions/meActions/setMyData";
import {useSelector} from "react-redux";
import {IInitState} from "../index";

export interface IMyState {
    loading: boolean
    myData: IUserData
    error: string
}
type MyActions = MeRequestAction | MeRequestGetErrorAction | SetMyDataAction

export const meReducer: Reducer<IMyState, MyActions> = (state = useSelector<IInitState, IMyState>( state => state.me), action) => {
    switch (action.type) {
        case "ME_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "ME_REQUEST_SUCCESS":
            return {
                ...state,
                loading: false,
                myData: action.payload
            }
        case "ME_REQUEST_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
