import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchPostsWC = (set: SetState<IInitState>) => ({
  fetchPostsWC: () =>
// @ts-ignore
    set((prev) =>
      ({
        postsWithComments:
          mergeDeepRight(prev.postsWithComments, {
              loading: true
            })
      })),
});

export default fetchPostsWC;
