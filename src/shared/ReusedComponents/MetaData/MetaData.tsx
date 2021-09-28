import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import styles from './metadata.scss';

import {useUserImgData} from "../../../hooks/useUserImgData";
import {useMediaSize} from "../../../hooks/useMediaSize";
import {getLongAgoDate} from "../../../utils/js/getLongAgoDate";

import {userContext} from "../../context/userContext";


interface IMetaDataParams {
  author: string;
  authorUrl?: string;
  topicName?: string;
  publicationTime: Date;
}

export function  MetaData(props: IMetaDataParams) {
    const {author, authorUrl, topicName, publicationTime} = props;
    let [isMediaMobile] = useMediaSize();
    const {name} = useContext(userContext);
    let avatar = name? useUserImgData(author)[0] : '';

    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                {name && avatar !== '' && !avatar.includes('styles.redditmedia') && <img className={styles.avatar} src={avatar} alt="avatar"/>}
                {(!name || avatar.includes('styles.redditmedia')) && <img className={styles.avatar} src={'https://i.redd.it/4qezgmi0x87z.png'} alt="avatar"/>}

                <a href={authorUrl} className={styles.userName}>{author}</a>
            </div>
            <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>{!isMediaMobile && `опубликовано`} </span>
                {getLongAgoDate(publicationTime)}
            </span>
            {!isMediaMobile && topicName && <span className={styles.topicName}>{ topicName }</span>}
        </div>
    );
}
