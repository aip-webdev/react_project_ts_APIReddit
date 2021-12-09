import React, {useEffect, useState} from 'react';
import styles from './userblock.scss';
import {useUserData} from "../../../../hooks/useUserData";
import {useMediaSize} from "../../../../hooks/useMediaSize";

import {Text} from "../../ReusedComponents/Text";
import {EColor} from "../../../../utils/enums/colorEnum";
import {EIcon, Icon} from "../../ReusedComponents/Icon";

export function UserBlock() {
    const IS_PROD = process.env.NODE_ENV !== 'development';
    const PORT = process.env.PORT
    let URI = IS_PROD ? process.env.MY_URI : `http://localhost:${PORT ?? 3000}`
    const redditUrl = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=somestate&redirect_uri=${URI}/auth&duration=temporary&scope=identity read submit`

    let [iconSize, setIconSize] = useState(30);
    let [isMediaMobile] = useMediaSize();
    const {data, loading} = useUserData();
    useEffect(() => {
        if (isMediaMobile) {
            setIconSize(30);
        } else {
            setIconSize(50)
        }
    }, [isMediaMobile])
    return (
        <a
            className={styles.userBox}
            href={redditUrl}
        >
            <div className={styles.avatarBox}>
                {data.iconImg
                    ? <img src={data.iconImg} alt='user avatar' className={styles.avatarImage}/>
                    : <Icon width={iconSize} height={iconSize} vbWidth={50} vbHeight={50} type={EIcon.unknown}
                            pathFill='#d9d9d9'/>
                }
            </div>
            <div className={styles.userName}>
                {loading ?
                    <Text size={20} color={EColor.black}> {'Загрузка'} </Text> :
                    <Text size={20} color={EColor.black}> {data.name || 'Аноним'} </Text>
                }
            </div>
        </a>
    );
}
