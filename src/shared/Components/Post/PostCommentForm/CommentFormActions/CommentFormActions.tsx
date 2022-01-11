import React from 'react';
import { EIcon, Icon } from '../../../ReusedComponents/Icon';
import styles from './commentformactions.scss';


export const CommentFormActions = () =>
	<div className={styles.postCommentActions}>
		<button className={styles.actionBtn}>
			<Icon width={20} height={12} type={EIcon.CAInlineCode} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={18} height={18} type={EIcon.CAPicture} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={16} height={20} type={EIcon.CAList} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={14} height={17} type={EIcon.CADownload} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={18} height={18} type={EIcon.CAAvatar} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={22} height={16} type={EIcon.CACycle} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={20} height={10} type={EIcon.CAStrikethrough} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={20} height={18} type={EIcon.CAVoice} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={20} height={20} type={EIcon.CAQuote} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={19} height={19} type={EIcon.CAPencil} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={16} height={18} type={EIcon.CASuperscript} pathFill="#999999" />
		</button>
		<button className={styles.actionBtn}>
			<Icon width={20} height={20} type={EIcon.CAPdf} pathFill="#999999" />
		</button>
	</div>

