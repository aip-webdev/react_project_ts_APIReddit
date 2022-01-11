import axios from 'axios';
import { merge } from 'ramda';
import { IPostData } from '../../hooks/usePostsData';
import { IPostWithCommentsData } from '../../hooks/usePostsWithCommentsData';
import useStore from '../index';

const postsWCRequestAsync = () => ({
  postsWCRequestAsync: () => {
    const {
      posts,
      postsWithComments,
      fetchPostsWC,
      fetchPostsWCSuccess,
      fetchPostsWCFailure,
    } = useStore.getState();
    const postsWC: IPostWithCommentsData[] = postsWithComments.postsWCData;
    const createPostData = (comment: any) => {
      const commentData = comment.data;
      return {
        id: commentData.id,
        author: commentData.author,
        author_url: 'https://www.reddit.com/r/' + commentData.subreddit + '/',
        comment_body: commentData.body_html,
        replies: commentData.replies?.data?.children
          .map((reply: { kind: string | string[]; data: any }) => {
            if (!reply.kind.includes('more')) {
              return reply;
            }
            return null;
          })
          .filter((reply: any) => Boolean(reply?.data?.author))
          .map(createPostData),
        count_karma: commentData.ups,
        created: new Date(commentData.created * 1000),
      };
    };

    fetchPostsWC();
    posts.postsData.map(async (post: IPostData) => {
      try {
        await axios
          .get(`https://www.reddit.com${post.post_url}.json`)
          .then(res => merge(post, {
            comments: res.data[1]?.data?.children?.map(createPostData),
          }))
          .then((post: IPostWithCommentsData) => {
            postsWC.push(post);
          })
          .then(() => fetchPostsWCSuccess(postsWC));
      } catch (e: any) {
        fetchPostsWCFailure(e.toString());
      }
    });
  },
});

export default postsWCRequestAsync;
