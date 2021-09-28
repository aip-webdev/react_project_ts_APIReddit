import {useContext, useEffect, useState} from "react";
import axios from "axios";
import  {merge} from "ramda";
import {IPostData, usePostsData} from "./usePostsData";

export interface ICommentsData {
    id: string;
    author: string;
    author_url?: string;
    comment_body: string;
    count_karma: number;
    created: Date;
    replies: ICommentsData[] | undefined;
}

export interface IPostWithCommentsData {
    id: string;
    author: string;
    author_url?: string;
    author_img?: string;
    count_comments: number;
    count_karma: number;
    comments?: ICommentsData[],
    created: Date;
    post_url?: string;
    self_text?: string;
    title?: string;
    topic_name?: string;
    url: string;
    upvote_ratio?: number;
}

export function usePostsWithCommentsData() {
    const [postsData, setData] = useState<IPostWithCommentsData[]>([])
    let [posts] = usePostsData();
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
    useEffect(() => {
        let resData = posts.map((post: IPostData) => {
            let newPost:IPostWithCommentsData;
            return axios.get(`https://www.reddit.com${post.post_url}.json`)
                .then((res) => {
                    newPost = merge(post, {
                        comments: res.data[1]?.data?.children?.map(createPostData)
                    });
                    postsData.push(newPost)
                   return newPost
                })
                .catch(console.log);
        })
        setData(postsData)
    }, [posts])

    return [postsData]
}
