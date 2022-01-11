import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchPostsWCFailure = (set: SetState<IInitState>) => ({
  fetchPostsWCFailure: (error: string) =>
// @ts-ignore
    set((prev) =>
      ({
        postsWithComments:
          mergeDeepRight(prev.postsWithComments, {
            loading: false,
            error,
          })
      }))
});

export default fetchPostsWCFailure;
