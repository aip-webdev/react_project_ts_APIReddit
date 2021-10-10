import React, {FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IInitState} from "../../../store";
import {updateCommentFormValue} from "../../../store/actions/commentFormActions/updateCommentFormValue";
import {PostCommentForm} from "../PostCommentForm";
import {IUserData} from "../../../hooks/useUserData";

export function PostCommentFormContainer() {
  const { iconImg, name } = useSelector<IInitState, IUserData>( state => state.me.myData);
  let value = useSelector<IInitState, string>( state => state.commentText);
  const dispatch = useDispatch();

  function handleSubmit (event: FormEvent) {
    dispatch(updateCommentFormValue(''))
  }

  function handleChange(value: string) {
    dispatch(updateCommentFormValue(value))
  }
  return (
     <PostCommentForm
     value={value}
     name={name}
     onChange={handleChange}
     onSubmit={handleSubmit}/>
  );
}
