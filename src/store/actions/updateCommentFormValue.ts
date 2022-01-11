import { SetState } from 'zustand';
import { IInitState } from '../../../types/store';

const updateCommentFormValue = (set: SetState<IInitState>) => ({
  updateCommentFormValue: (commentText: string) =>
// @ts-ignore
    set(() =>
      ({ commentText: commentText })),
});

export default updateCommentFormValue;
