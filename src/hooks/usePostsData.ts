import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";
import  {merge} from "ramda";

 export interface IPostData {
    id: string;
    author: string;
    author_url?: string;
    author_img?: string;
    count_comments: number;
    count_karma: number;
    created: Date;
    post_url?: string;
    self_text?: string;
    title?: string;
    topic_name?: string;
    url: string;
    upvote_ratio?: number;
}

    export function usePostsData() {
    const [postsData, setData] = useState<IPostData[]>([])
    const { token } = useContext(tokenContext)
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json', {
            headers: {
                Authorization: `bearer ${token}`,
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
                setData(postDataList)
            })
            .catch(console.log)

    }, [token])

    return [postsData]
}
