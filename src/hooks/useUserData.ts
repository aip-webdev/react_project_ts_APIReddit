import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IInitState} from "../store";
import {fetchMyDataAsync} from "../store/actions/meActions";

export interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const data = useSelector<IInitState, IUserData>(state => state.me.myData);
    const loading = useSelector<IInitState, boolean>(state => state.me.loading);
    const token = useSelector<IInitState, string>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMyDataAsync());
    }, [token]);
    return {data, loading}
}
