import {Reducer} from "redux";
import {IUserData} from "../../hooks/useUserData";
import {FETCH_MY_DATA, FetchMyDataAction} from "../actions/meActions/fetchMyData";
import {FETCH_MY_DATA_FAILURE, FetchMyDataErrorAction} from "../actions/meActions/fetchMyDataError";
import {FETCH_MY_DATA_SUCCESS, SetMyDataAction} from "../actions/meActions/setMyData";
import {useSelector} from "react-redux";
import {IInitState} from "../index";
import {merge} from "ramda";

export interface IMyState {
    loading: boolean
    myData: IUserData
    error: string
}

type MyActions = FetchMyDataAction | FetchMyDataErrorAction | SetMyDataAction

export const meReducer: Reducer<IMyState, MyActions> = (state = useSelector<IInitState, IMyState>(state => state.me), action) => {
    switch (action.type) {
        case FETCH_MY_DATA:
            return merge(state, {loading: true})

        case FETCH_MY_DATA_SUCCESS:
            return merge(state, {loading: false, myData: action.payload})

        case FETCH_MY_DATA_FAILURE:
            return merge(state, {loading: false, error: action.error})
        default:
            return state;
    }
}
