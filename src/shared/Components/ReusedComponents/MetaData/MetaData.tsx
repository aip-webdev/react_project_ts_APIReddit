import React from 'react';
import { useMediaSize } from '../../../../hooks/useMediaSize';
import { useUserImgData } from '../../../../hooks/useUserImgData';
import useStore from '../../../../store';
import { getLongAgoString } from '../../../../utils/js/getLongAgoString';
import styles from './metadata.scss';

interface IMetaDataParams {
	author: string
	authorUrl?: string
	topicName?: string
	publicationTime: Date
}

export function MetaData(props: IMetaDataParams) {
	const { author, authorUrl, topicName, publicationTime } = props
	const [isMediaMobile] = useMediaSize()
	const { name } = useStore(state => ({name: state.me.myData.name}))
	const avatar = name && author !== ('[deleted]' || undefined) ? useUserImgData(author)[0] : ''

	return (
		<div className={styles.metaData}>
			<div className={styles.userLink}>
				{name && avatar !== '' && !avatar.includes('styles.redditmedia') &&
          <img className={styles.avatar} src={avatar} alt="avatar" />
				}
				{(!name || avatar.includes('styles.redditmedia')) &&
          <img className={styles.avatar} src={'https://i.redd.it/4qezgmi0x87z.png'} alt="avatar" />
				}

				<a href={authorUrl} className={styles.userName}>
					{author}
				</a>
			</div>
			<span className={styles.createdAt}>
				<span className={styles.publishedLabel}>{!isMediaMobile && 'опубликовано'} </span>
				{getLongAgoString(publicationTime)}
			</span>
			{!isMediaMobile && topicName && <span className={styles.topicName}>{topicName}</span>}
		</div>
	)
}
