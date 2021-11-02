import {ThunkAction} from "redux-thunk";
import {IInitState} from "../../index";
import {Action} from "redux";
import axios from "axios";
import {merge} from "ramda";
import {postsWCRequest} from "./postsWithCommentsRequest";
import {setPostsWCData} from "./setPostWithCommentsData";
import {IPostWithCommentsData} from "../../../hooks/usePostsWithCommentsData";

export const postsWCRequestAsync = (): ThunkAction<void, IInitState, unknown, Action<string>> => async (dispatch, getState) => {
    let postsWC = getState().postWithComments.postsWCData;
    const createPostData = (comment: any) => {
        let commentData = comment.data;
        return {
            id: commentData.id,
            author: commentData.author,
            author_url: 'https://www.reddit.com/r/' + commentData.subreddit + '/',
            comment_body: commentData.body_html,
            replies: commentData.replies?.data?.children
                .map((reply: { kind: string | string[]; data: any; }) => {
                    if (!reply.kind.includes('more')) {
                        return reply;
                    } else return null;
                })
                .filter((reply: any) => !!reply?.data?.author)
                .map(createPostData),
            count_karma: commentData.ups,
            created: new Date(commentData.created * 1000),
        };
    }

    dispatch(postsWCRequest());
    getState().posts.postsData.map(async (post) => {
        try {
            await axios.get(`https://www.reddit.com${post.post_url}.json`)
                .then((res) => {
                    return merge(post, {
                        comments: res.data[1]?.data?.children?.map(createPostData)
                    });
                })
                .then((post: IPostWithCommentsData) => {
                    postsWC.push(post);
                })
                .then(() => dispatch(setPostsWCData(postsWC)))
        } catch (e) {
            console.log(e)
        }
    })

}
