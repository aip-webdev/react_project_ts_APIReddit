import {applyMiddleware, createStore} from "redux";
import {IMyState} from "./reducers/meReducer";
import {IPostState} from "./reducers/postReducer";
import {IPostWithCommentsState} from "./reducers/postWCReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

export interface IInitState {
    commentText: string;
    token: string;
    posts: IPostState;
    postWithComments: IPostWithCommentsState
    me: IMyState;
}

export const initialState: IInitState = {
    commentText: '',
    token: '',
    posts: {loading: false, error: '', postsData: [], after: ''},
    postWithComments: {loading: false, error: '', postsWCData: []},
    me: {loading: false, error: '', myData: {}}
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
