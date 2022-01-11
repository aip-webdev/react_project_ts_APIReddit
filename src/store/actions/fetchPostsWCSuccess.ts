import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';
import { IPostWithCommentsData } from '../../hooks/usePostsWithCommentsData';

const fetchPostsWCSuccess = (set: SetState<IInitState>) => ({
  fetchPostsWCSuccess: (postsData: IPostWithCommentsData[]) =>
// @ts-ignore
    set((prev) =>
      ({
        postsWithComments: mergeDeepRight(prev.postsWithComments, {
          loading: false,
          postsWCData: [...prev.postsWithComments.postsWCData, ...postsData],
        })
      })),
});

export default fetchPostsWCSuccess;
