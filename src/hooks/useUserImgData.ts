import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

export function useUserImgData(username: string) {
    const [data, setData] = useState('https://i.redd.it/4qezgmi0x87z.png')
    const { token } = useContext(tokenContext);
    useEffect(() => {
        axios.get(`https://oauth.reddit.com/user/${username}/about.json`, {
            headers: { Authorization: `bearer ${token}` }
        })
            .then((res) => {
                setData(res.data.data.icon_img);
            })
            .catch()
    }, [token])

    return [data]
}
