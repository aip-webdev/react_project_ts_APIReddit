import React from 'react';
import styles from './textcontent.scss';

interface ITextContentProps {
    author?: string;
    authorUrl?: string;
    title?: string;
    postUrl?: string;
    selfText?: string;
}

export function TextContent(props: ITextContentProps) {
    const {author, authorUrl, postUrl, selfText, title} = props;
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
              className={styles.avatar}
              src={'https://img1.fonwall.ru/o/yx/games-2020-games-maneater-ps4-games.jpeg?route=mid&h=750'}
              alt="avatar"
          />

          <a href={authorUrl} className={styles.userName}>{author}</a>
        </div>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href={postUrl} className={styles.postLink}>
            {title}
            {selfText &&
                <h3 className={styles.titleSelf}>
                    {selfText}
                </h3>
            }
        </a>
      </h2>
    </div>


  );
}
