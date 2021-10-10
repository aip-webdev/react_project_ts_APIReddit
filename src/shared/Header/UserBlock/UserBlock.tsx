import React, {useEffect, useState} from 'react';
import styles from './userblock.scss';
import {EIcon, Icon} from "../../ReusedComponents/Icon";
import {EColor} from "../../../utils/enums/colorEnum";
import {Text} from "../../ReusedComponents/Text";
import {useMediaSize} from "../../../hooks/useMediaSize";
import {useUserData} from "../../../hooks/useUserData";

export function UserBlock() {
    let [iconSize, setIconSize] = useState(30);
    let [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
    const {data, loading}= useUserData();
    const redditUrl = 'https://www.reddit.com/api/v1/authorize?client_id=' + `${process.env.CLIENT_ID}` + '&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
    useEffect( () => {
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
                  : <Icon width={iconSize} height={iconSize} vbWidth={50} vbHeight={50} type={EIcon.unknown} pathFill='#d9d9d9' />
              }
          </div>

          <div className={styles.userName}>
              { loading ?
                  <Text size={20} color={EColor.black}> {'Загрузка'} </Text> :
                  <Text size={20} color={EColor.black}> {data.name || 'Аноним'} </Text>
              }
          </div>
      </a>
  );
}
