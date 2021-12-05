import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {Action} from "redux";
import {fetchMyData} from "./fetchMyData";
import axios from "axios";
import {setMyData} from "./setMyData";
import {fetchMyDataError} from "./fetchMyDataError";

export const fetchMyDataAsync = (): ThunkAction<void, IInitState, unknown, Action<string>> => (dispatch, getState) => {
    if (!getState().token) return;
    dispatch(fetchMyData());
    (async () => {
        try {
            await axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: {Authorization: `bearer ${getState().token}`}
            })
                .then((res) => {
                    const userData = res.data;
                    dispatch(setMyData({
                        name: userData.name,
                        iconImg: userData.icon_img
                    }))
                })
        } catch (e) {
            dispatch(fetchMyDataError(e))
            localStorage.removeItem('reddit-token')
        }
    })()

}



