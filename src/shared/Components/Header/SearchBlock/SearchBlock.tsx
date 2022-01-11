import React from 'react';
import { useMediaSize } from '../../../../hooks/useMediaSize';
import { EIcon, Icon } from '../../ReusedComponents/Icon';
import { Input } from '../../ReusedComponents/Input';
import styles from './searchblock.scss';

export const SearchBlock = () => {
	const [isMediaMobile] = useMediaSize()

	return (
		<div className={styles.searchBlock}>
			{isMediaMobile ?
				<Icon
					type={EIcon.search}
					width={11}
					height={11}
					vbWidth={19}
					vbHeight={19}
					pathFill="#c4c4c4"
				/>
				:
				<Icon type={EIcon.search} width={19} height={19} pathFill="#c4c4c4" />
			}

			<Input placeholder={'Поиск'} />
		</div>
	)
}
