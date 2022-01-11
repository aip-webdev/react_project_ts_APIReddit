import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchPostsFailure = (set: SetState<IInitState>) => ({
  fetchPostsFailure: (error: string) =>
// @ts-ignore
    set((prev) =>
      ({
        posts:
          mergeDeepRight(prev.posts, {
            loading: false,
            error,
          }),

      })),
});

export default fetchPostsFailure;
