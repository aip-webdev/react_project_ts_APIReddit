import React from 'react';
import { EColor } from '../../../../utils/enums/EColor';
import styles from './text.scss';

const classNames = require('classnames')
type TSizes = 9 | 10 | 12 | 14 | 16 | 20 | 28 | 36

interface ITextProps {
	As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
	children: React.ReactNode
	size: TSizes
	mobileSize?: TSizes
	tabletSize?: TSizes
	desktopSize?: TSizes
	color: EColor
}

export function Text(props: ITextProps) {
	const {
		As = 'span',
		children,
		color = EColor.black,
		desktopSize,
		mobileSize,
		size,
		tabletSize,
	} = props

	const classes = classNames(
		styles[`s${size}`],
		{ [styles[`m${mobileSize}`]]: mobileSize },
		{ [styles[`t${tabletSize}`]]: tabletSize },
		{ [styles[`d${desktopSize}`]]: desktopSize },
		styles[color],
	)
	return <As className={classes}>{children}</As>
}
