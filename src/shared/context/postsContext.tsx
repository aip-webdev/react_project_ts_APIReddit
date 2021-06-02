import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

export interface IPostsContextData {
    id: string;
    author: string;
    author_url?: string;
    post_url?: string;
    title?: string;
    url: string;
    count_comments: number;
    count_karma: number;
    self_text?: string;
}

export const postsContext = React.createContext<IPostsContextData[]>([])

export function PostsContextProvider({children}:{children:React.ReactNode}) {
    const [posts] = usePostsData()

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}
