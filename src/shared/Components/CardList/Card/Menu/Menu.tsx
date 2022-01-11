import { contains, filter } from 'ramda';
import React, { useEffect, useState } from 'react';
import { useMediaSize } from '../../../../../hooks/useMediaSize';
import { Dropdown } from '../../../ReusedComponents/Dropdown';
import { Complain } from '../Controls/Actions/Complain';
import { Hide } from '../Controls/Actions/Hide';
import { Remove } from '../Controls/Actions/Remove';
import { Save } from '../Controls/Actions/Save';
import { Share } from '../Controls/Actions/Share';
import { Statistics } from '../Controls/Actions/Statistics';
import { Comments } from '../Controls/Comments';
import styles from './menu.scss';

const actionsList = [
	{
		id: 'comments',
		element: <Comments btnClassName={styles.actionButton} text="Комментарии" textHide={false} />,
	},
	{
		id: 'share',
		element: <Share btnClassName={styles.actionButton} textHide={false} />,
	},
	{
		id: 'statistics',
		element: <Statistics btnClassName={styles.actionButton} textHide={false} />,
	},
	{
		id: 'hide',
		element: <Hide btnClassName={styles.actionButton} textHide={false} />,
	},
	{
		id: 'remove',
		element: <Remove btnClassName={styles.actionButton} />,
	},
	{
		id: 'save',
		element: <Save btnClassName={styles.actionButton} />,
	},
	{
		id: 'complain',
		element: <Complain btnClassName={styles.actionButton} />,
	},
	{
		id: 'close',
		element: <button className={styles.closeBtn}>Закрыть</button>,
	},
]

interface IAction {
	id: string
	element: JSX.Element
}

export const Menu = ():JSX.Element => {
	const [list, setList] = useState(actionsList)
	const [isMediaMobile] = useMediaSize()
	const isMobileActions = (action: IAction): boolean =>
		!contains(action.id, ['statistics', 'comments', 'share', 'remove', 'save'])
	const isNoMobileActions = (action: IAction): boolean => !contains(action.id, ['statistics', 'remove'])
	useEffect(() => {
		if (isMediaMobile) {
			setList(filter(isMobileActions, actionsList))
		} else {
			setList(filter(isNoMobileActions, actionsList))
		}
	}, [isMediaMobile])

	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}>
						<svg
							width="5"
							height="20"
							viewBox="0 0 5 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="2.5" cy="2.5" r="2.5" fill="#F3F3F3" />
							<circle cx="2.5" cy="10" r="2.5" fill="#F3F3F3" />
							<circle cx="2.5" cy="17.5" r="2.5" fill="#F3F3F3" />
						</svg>
					</button>
				}
			>
				<ul className={styles.menuList}>
					{list.map((action: IAction) =>
						<li className={styles.listLine} key={action.id}>
							{action.element}
						</li>
					)}
				</ul>
			</Dropdown>
		</div>
	)
}
