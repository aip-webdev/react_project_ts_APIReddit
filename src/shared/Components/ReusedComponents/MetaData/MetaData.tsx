import React from 'react';
import styles from './metadata.scss';

import {useUserImgData} from '../../../../hooks/useUserImgData';
import {useMediaSize} from '../../../../hooks/useMediaSize';

import {useSelector} from 'react-redux';
import {IInitState} from '../../../../store';
import {IUserData} from '../../../../hooks/useUserData';
import {getLongAgoString} from "../../../../utils/js/getLongAgoString";

interface IMetaDataParams {
    author: string;
    authorUrl?: string;
    topicName?: string;
    publicationTime: Date;
}

export function MetaData(props: IMetaDataParams) {
    const {author, authorUrl, topicName, publicationTime} = props;
    let [isMediaMobile] = useMediaSize();
    const {name} = useSelector<IInitState, IUserData>(state => state.me.myData);
    let avatar = name && author !== `[deleted]` || undefined ? useUserImgData(author)[0] : '';

    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                {name && avatar !== '' && !avatar.includes('styles.redditmedia') &&
                <img className={styles.avatar} src={avatar} alt="avatar"/>}
                {(!name || avatar.includes('styles.redditmedia')) &&
                <img className={styles.avatar} src={'https://i.redd.it/4qezgmi0x87z.png'} alt="avatar"/>}

                <a href={authorUrl} className={styles.userName}>{author}</a>
            </div>
            <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>{!isMediaMobile && `опубликовано`} </span>
                {getLongAgoString(publicationTime)}
            </span>
            {!isMediaMobile && topicName && <span className={styles.topicName}>{topicName}</span>}
        </div>
    );
}
