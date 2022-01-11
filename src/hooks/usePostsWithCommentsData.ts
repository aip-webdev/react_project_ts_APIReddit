import { useEffect } from 'react';
import useStore from '../store';

export interface ICommentsData {
	id: string
	author: string
	author_url?: string
	comment_body: string
	count_karma: number
	created: Date
	replies: ICommentsData[] | undefined
}

export interface IPostWithCommentsData {
	id: string
	author: string
	author_url?: string
	author_img?: string
	count_comments: number
	count_karma: number
	comments?: ICommentsData[]
	created: Date
	post_url?: string
	self_text?: string
	title?: string
	topic_name?: string
	url: string
	upvote_ratio?: number
}

export const usePostsWithCommentsData = (): { loading: boolean; postsWCData: IPostWithCommentsData[] } => {
  const {
    postsData,
    postsWCData,
    loading,
    postsWCRequestAsync
  } = useStore(state => ({
    postsData: state.posts.postsData,
    postsWCData: state.postsWithComments.postsWCData,
    loading: state.postsWithComments.loading,
    postsWCRequestAsync: state.postsWCRequestAsync
  }))

	useEffect(() => {
		if (!postsData) {
			return
		}
		postsWCRequestAsync()
	}, [postsData])

	return { loading, postsWCData }
}
