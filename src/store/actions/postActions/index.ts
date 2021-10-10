import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {Action} from "redux";

import axios from "axios";
import {postRequest} from "./postsRequest";
import {setPostsData} from "./setPostData";
import {postsRequestGetError} from "./postsRequestGetError";

export const postsRequestAsync = (): ThunkAction<void, IInitState, unknown, Action<string>> =>(dispatch, getState ) =>{
    dispatch(postRequest());

    axios.get('https://oauth.reddit.com/best.json', {
        headers: {
            Authorization: `bearer ${getState().token}`,
        }
    })
        .then((res) => {
            let postDataList = res.data.data.children;
            postDataList = postDataList.map((post: any) => {
                let postData = post.data;
                return {
                    id: postData.id,
                    author: postData.author,
                    author_url: 'https://www.reddit.com/r/' + postData.subreddit + '/',
                    post_url: postData.permalink,
                    topic_name: postData.link_flair_text,
                    title: postData.title,
                    upvote_ratio: postData.upvote_ratio*100,
                    url: postData.url,
                    count_comments: postData.num_comments,
                    count_karma: postData.ups,
                    created: new Date(postData.created*1000),
                    self_text: postData.selftext,
                }
            })
            return postDataList
        })
        .then((postDataList) => {
            dispatch(setPostsData(postDataList))
        })
        .catch(rej => {
            console.log(rej)
            dispatch(postsRequestGetError(rej.toString()))
        })
}
