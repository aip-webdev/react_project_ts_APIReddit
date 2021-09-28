import React from "react";

import {IPostWithCommentsData, usePostsWithCommentsData} from "../../hooks/usePostsWithCommentsData";

export const postsAndCommentsContext = React.createContext<IPostWithCommentsData[]>([])

export function PostsAndCommentsContextProvider({children}:{children:React.ReactNode}) {
    let [posts] = usePostsWithCommentsData()

    return (
        <postsAndCommentsContext.Provider value={posts}>
            {children}
        </postsAndCommentsContext.Provider>
    )
}

