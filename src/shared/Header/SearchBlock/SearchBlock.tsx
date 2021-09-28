import React from 'react';
import styles from './searchblock.scss';
import {Input} from "../../ReusedComponents/Input";
import {EIcon, Icon} from "../../ReusedComponents/Icon";
import {useMediaSize} from "../../../hooks/useMediaSize";


export function SearchBlock() {
  const [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();

  return (
    <div className={styles.searchBlock}>
        {
            isMediaMobile?
                <Icon type={EIcon.search} width={11} height={11} vbWidth={19} vbHeight={19} pathFill='#c4c4c4' />:
                <Icon type={EIcon.search} width={19} height={19} pathFill='#c4c4c4' />
        }

        <Input  placeholder={'Поиск'}/>
    </div>
  );
}
