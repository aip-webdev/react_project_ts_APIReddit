import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchMyDataFailure = (set: SetState<IInitState>) => ({
  fetchMyDataFailure: (error: string) =>
// @ts-ignore
    set((prev) =>
      ({
        me: mergeDeepRight(prev.me, {
          loading: false,
          error,
        }),
      })),
});

export default fetchMyDataFailure;
