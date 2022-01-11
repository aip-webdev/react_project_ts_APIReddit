import React from 'react';
import { useMediaSize } from '../../../../hooks/useMediaSize';
import { EColor } from '../../../../utils/enums/EColor';
import { EIcon, Icon } from '../../ReusedComponents/Icon';
import { Text } from '../../ReusedComponents/Text';
import styles from './mails.scss';

export const Mails = () => {
	const [isMediaMobile] = useMediaSize()
	return (
		<button className={styles.mailBtn}>
			{
				<span className={styles.mailCount}>
					<Text size={12} color={EColor.white} mobileSize={9} > 4 </Text>
				</span>
			}
			{isMediaMobile ?
				<Icon
					width={13}
					height={10}
					vbWidth={20}
					vbHeight={16}
					type={EIcon.mail}
					pathFill="#D9D9D9"
				/>
				:
				<Icon width={20} height={16} type={EIcon.mail} pathFill="#D9D9D9" />
			}
		</button>
	)
}
