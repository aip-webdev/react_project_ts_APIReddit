import React from 'react';
import { Link } from 'react-router-dom';
import { stringShorter } from '../../../../../utils/js/stringShorter';
import { MetaData } from '../../../ReusedComponents/MetaData';
import { ICardData } from '../Card';
import styles from './textcontent.scss';

export const TextContent = React.memo(
  ({ post }: ICardData): JSX.Element => {
    const { id, author, author_url, topic_name, created, self_text, title } = post
    return (
      <div className={styles.textContent}>
        <MetaData
          author={author}
          authorUrl={author_url}
          topicName={topic_name}
          publicationTime={created}
        />
        <h2 className={styles.title}>
          <Link to={`/posts/${id}`} className={styles.postLink}>
            {title}
          </Link>
          {self_text &&
          <span className={styles.titleSelf}>{stringShorter(self_text, 30, 60, 80)}</span>
          }
        </h2>
      </div>
    )
  }
)
