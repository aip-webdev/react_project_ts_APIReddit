import {useEffect} from "react";
import {saveToken} from "../store/actions/tokenActions";
import {useDispatch, useSelector} from "react-redux";
import {IInitState} from "../store";

export function useToken() {
    const token = useSelector<IInitState, string>(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveToken())
    }, []);

    return [token]
}
