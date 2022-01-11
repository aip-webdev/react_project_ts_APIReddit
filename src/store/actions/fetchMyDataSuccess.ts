import { mergeDeepRight } from 'ramda';
import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';
import { IUserData } from '../../hooks/useUserData';

const fetchMyDataSuccess = (set: SetState<IInitState>) => ({
  fetchMyDataSuccess: (myData: IUserData) =>
// @ts-ignore
    set((prev) =>
      ({
        me: mergeDeepRight(prev.me, {
          loading: false,
          error: '',
          myData,
        }),
      })),
});

export default fetchMyDataSuccess;
