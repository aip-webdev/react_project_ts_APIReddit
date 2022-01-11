import create, { GetState, SetState } from 'zustand'
import { StoreApiWithSubscribeWithSelector} from 'zustand/middleware'
import { IInitState } from '../../types/store';
import fetchMyData from './actions/fetchMyData';
import fetchMyDataFailure from './actions/fetchMyDataFailure';
import fetchMyDataSuccess from './actions/fetchMyDataSuccess';
import fetchPosts from './actions/fetchPosts';
import fetchPostsFailure from './actions/fetchPostsFailure';
import fetchPostsSuccess from './actions/fetchPostsSuccess';
import fetchPostsWC from './actions/fetchPostsWC';
import fetchPostsWCFailure from './actions/fetchPostsWCFailure';
import fetchPostsWCSuccess from './actions/fetchPostsWCSuccess';
import setPostType from './actions/setPostType';
import setToken from './actions/setToken';
import updateCommentFormValue from './actions/updateCommentFormValue';
import fetchMyDataAsync from './asyncActions/fetchMyDataAsync';
import postsRequestAsync from './asyncActions/postsRequestAsync';
import postsWCRequestAsync from './asyncActions/postsWCRequestAsync';

const useStore = create<IInitState,
  SetState<IInitState>,
  GetState<IInitState>,
  StoreApiWithSubscribeWithSelector<IInitState>>((set: SetState<IInitState>) => ({
  commentText: '',
  token: '',
  posts: {
    loading: false,
    error: '',
    postsData: [],
    after: '',
  },
  postsType: 'best',
  postsWithComments: {
    loading: false,
    error: '',
    postsWCData: [],
  },
  me: {
    loading: false,
    error: '',
    myData: {},
  },
  ...fetchMyData(set),
  ...fetchMyDataSuccess(set),
  ...fetchMyDataFailure(set),
  ...fetchPosts(set),
  ...fetchPostsSuccess(set),
  ...fetchPostsFailure(set),
  ...fetchPostsWC(set),
  ...fetchPostsWCSuccess(set),
  ...fetchPostsWCFailure(set),
  ...setPostType(set),
  ...setToken(set),
  ...updateCommentFormValue(set),
  ...fetchMyDataAsync(),
  ...postsRequestAsync(),
  ...postsWCRequestAsync(),
}));

export default useStore;
