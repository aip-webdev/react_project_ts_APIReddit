import {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {IInitState} from "../store";


export function useUserImgData(username: string) {
    const [data, setData] = useState('https://i.redd.it/4qezgmi0x87z.png')
    const token = useSelector<IInitState, string>(state => state.token);
    if (!token) return [data];
    (async () => {
        await axios.get(`https://oauth.reddit.com/user/${username}/about.json`, {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((res) => {
                setData(res.data.data.icon_img);
            })
            .catch(console.log)
    })()


    return [data]
}
