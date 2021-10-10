import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {Action} from "redux";
import {meRequest} from "./meRequest";
import axios from "axios";
import {setMyData} from "./setMyData";
import {meRequestGetError} from "./meRequestGetError";

export const meRequestAsync = (): ThunkAction<void, IInitState, unknown, Action<string>> =>(dispatch, getState ) =>{
    dispatch(meRequest());

    axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${getState().token}` }
    })
        .then((res) => {
            const userData = res.data;
            dispatch(setMyData({
                name: userData.name,
                iconImg: userData.icon_img
            }))
        })
        .catch(rej => {
            console.log(rej)
            dispatch(meRequestGetError(rej.toString()))
            localStorage.removeItem('reddit-token')
        })

}



