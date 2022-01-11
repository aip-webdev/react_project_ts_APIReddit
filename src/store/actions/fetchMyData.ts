import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const fetchMyData = (set: SetState<IInitState>) => ({
  fetchMyData: () =>
    set((prev) =>
      ({
        me: mergeDeepRight(prev.me, { loading: true }),
      })),
});

export default fetchMyData;

