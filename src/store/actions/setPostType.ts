import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const setPostType = (set: SetState<IInitState>) => ({
  setPostType: (postsType: string) =>
// @ts-ignore
    set((prev) => ({
      postsType: postsType,
      posts: mergeDeepRight(prev.posts, {
        loading: false,
        error: '',
        postsData: [],
        after: '',
      }),
    })),
});

export default setPostType;
