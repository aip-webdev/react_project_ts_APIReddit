import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

export interface IPostsContextData {
    id: string;
    author: string;
    author_url?: string;
    author_img?: string;
    count_comments: number;
    count_karma: number;
    post_url?: string;
    self_text?: string;
    title?: string;
    topic_name?: string;
    url: string;
    upvote_ratio?: number;
}

export const postsContext = React.createContext<IPostsContextData[]>([])

export function PostsContextProvider({children}:{children:React.ReactNode}) {
    const [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}
