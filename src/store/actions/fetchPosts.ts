import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchPosts = (set: SetState<IInitState>) => ({
  fetchPosts: () =>
// @ts-ignore
    set((prev) =>
      ({
        posts: mergeDeepRight(prev.posts, { loading: true }),
      })),
});

export default fetchPosts;
