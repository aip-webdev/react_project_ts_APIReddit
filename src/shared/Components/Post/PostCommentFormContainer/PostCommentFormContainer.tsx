import React from 'react';
import useStore from '../../../../store';
import { PostCommentForm } from '../PostCommentForm';


export const PostCommentFormContainer = () => {
  const { name, value, updateCommentFormValue, } = useStore(state => ({
    name: state.me.myData.name,
    value: state.commentText,
    updateCommentFormValue: state.updateCommentFormValue,
  }));

  const handleSubmit = () => {
    updateCommentFormValue('');
  };

  const handleChange = (value: string) => {
    updateCommentFormValue(value);
  };

  return (
    <PostCommentForm value={value} name={name} onChange={handleChange} onSubmit={handleSubmit} />
  );
};
