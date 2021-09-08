import React from 'react';
import styles from './metadata.scss';

import {useUserImgData} from "../../../../hooks/useUserImgData";


interface IMetaDataParams {
  author: string;
  authorUrl?: string;
  topicName?: string;
}

export function MetaData(props: IMetaDataParams) {
    const {author, authorUrl, topicName} = props;
    const [data] = useUserImgData(author);

    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                {!data.includes('styles.redditmedia.com') && <img className={styles.avatar} src={data} alt="avatar"/>}
                {data.includes('styles.redditmedia.com') && <img className={styles.avatar} src={'https://i.redd.it/4qezgmi0x87z.png'} alt="avatar"/>}

                <a href={authorUrl} className={styles.userName}>{author}</a>
            </div>
            <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
                4 часа назад
            </span>
            {topicName && <span className={styles.topicName}>{ topicName }</span>}
        </div>
    );
}
