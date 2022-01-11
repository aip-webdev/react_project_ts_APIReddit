import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
	url: string
}

export const Preview = React.memo(
  (props: IPreviewProps): JSX.Element => {
    const { url } = props
    return (
      <div className={styles.preview}>
        <img className={styles.previewImg} src={url} alt="Post image" />
      </div>
    )
  }
)
