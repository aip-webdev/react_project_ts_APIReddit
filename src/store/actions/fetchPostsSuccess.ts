import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';
import { IPostData } from '../../hooks/usePostsData';

const fetchPostsSuccess = (set: SetState<IInitState>) => ({
  fetchPostsSuccess: (postsData: IPostData[], after: string) =>
// @ts-ignore
    set((prev) =>
      ({
        posts: mergeDeepRight(prev.posts, {
          loading: false,
          postsData: [...prev.posts.postsData, ...postsData],
          after,
        }),
      })),
});

export default fetchPostsSuccess;
