import React from 'react';
import styles from './mails.scss';
import {EIcon, Icon} from "../../ReusedComponents/Icon";
import {useMediaSize} from '../../../hooks/useMediaSize'
import {Text} from "../../ReusedComponents/Text";
import {EColor} from "../../../utils/enums/colorEnum";

export function Mails() {
    const [isMediaMobile] = useMediaSize();
    return (
        <button className={styles.mailBtn}>
            {<span className={styles.mailCount}>
              <Text size={12} children={4} color={EColor.white} mobileSize={9}/>
          </span>}
            {
                isMediaMobile ?
                    <Icon width={13} height={10} vbWidth={20} vbHeight={16} type={EIcon.mail} pathFill='#D9D9D9'/> :
                    <Icon width={20} height={16} type={EIcon.mail} pathFill='#D9D9D9'/>
            }
        </button>
    );
}
