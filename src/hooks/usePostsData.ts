import React, { useEffect } from 'react';
import useStore from '../store';

export interface IPostData {
  id: string
  author: string
  author_url?: string
  author_img?: string
  count_comments: number
  count_karma: number
  created: Date
  post_url?: string
  self_text?: string
  title?: string
  topic_name?: string
  url: string
  upvote_ratio?: number
}

export const usePostsData = (bottomOfList: React.RefObject<Element>): { postsData: IPostData[]; loading: boolean } => {
  const postsData = useStore(state => state.posts.postsData)
  const loading = useStore(state => state.posts.loading)
  const after = useStore(state => state.posts.after)
  const type = useStore(state => state.postsType)
  const postsRequestAsync = useStore(state => state.postsRequestAsync)
  useEffect(() => {
    if (!postsData) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && (postsData.length % 60 !== 0 || postsData.length === 0)) {
          postsRequestAsync();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0,
      },
    );
    if (!!bottomOfList.current) {
      observer.observe(bottomOfList.current)
    } else if (!!document.getElementById('cardListBottom')) {
      // @ts-ignore
      observer.observe(document.getElementById('cardListBottom'))
    }
    return () => {
      if (!!bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      } else if (!!document.getElementById('cardListBottom')) {
        // @ts-ignore
        observer.unobserve(document.getElementById('cardListBottom'))
      }
    }
  }, [bottomOfList.current, after, postsData, type]);
  return {
    postsData: postsData ?? [],
    loading: loading ?? false,
  };
};
