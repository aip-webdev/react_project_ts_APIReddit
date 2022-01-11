import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const setToken = (set: SetState<IInitState>) => ({
  setToken: (token: string) =>
// @ts-ignore
    set(() => ({
      token: token
    })),
});

export default setToken;
