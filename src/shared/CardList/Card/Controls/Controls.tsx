import React from 'react';
import styles from './controls.scss';
import {KarmaCounter} from "./KarmaCounter";
import {Comments} from "./Comments";
import {Actions} from "./Actions";
import {useMediaSize} from "../../../../hooks/useMediaSize";

interface IControlsProps {
    commentsCount: number;
    karmaCount: number;
}

export function Controls(props: IControlsProps) {
  const {commentsCount, karmaCount} = props;
  let [isMediaMobile, isMediaTablet, isMediaDesktop] = useMediaSize();
  return (
    <div className={styles.controls}>
      <KarmaCounter count={karmaCount}/>
      { isMediaMobile && <Comments btnClassName={styles.actionButton} text={commentsCount} textHide={false}/>}
      { isMediaMobile && <Actions /> }
    </div>
  );
}
