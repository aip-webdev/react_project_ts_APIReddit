import React, {useEffect, useState} from 'react';
import styles from './userblock.scss';
import {EIcon, Icon} from "../../Components/Icon";
import {EColor} from "../../../utils/enums/colorEnum";
import {Text} from "../../Components/Text";
import {useMediaSize} from "../../../hooks/useMediaSize";

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
    let [iconSize, setIconSize] = useState(30);
    let [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
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
              {avatarSrc
                  ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>
                  : <Icon width={iconSize} height={iconSize} vbWidth={50} vbHeight={50} type={EIcon.unknown} pathFill='#d9d9d9' />
              }
          </div>

          <div className={styles.userName}>
              <Text size={20} color={EColor.black}> { userName || 'Аноним' } </Text>
          </div>
      </a>
  );
}
