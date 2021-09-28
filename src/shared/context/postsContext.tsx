import React from "react";
import {IPostData, usePostsData} from "../../hooks/usePostsData";

export const postsContext = React.createContext<IPostData[]>([])

export function PostsContextProvider({children}:{children:React.ReactNode}) {
    let [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}
