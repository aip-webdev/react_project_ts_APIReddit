import axios from 'axios';
import useStore from '../index';

const postsRequestAsync = () => ({
  postsRequestAsync: async () => {
    let state = useStore.getState();
    let {
      token,
      posts,
      postsType,
      fetchPosts,
      fetchPostsSuccess,
      fetchPostsFailure,
    } = state;
    if (posts.loading) {
      return;
    }
    fetchPosts();
    try {
      await axios
        .get(`https://oauth.reddit.com/${postsType}.json`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
          params: {
            limit: 20,
            after: posts.after,
          },
        })
        .then(res => {

          const afterKey = res.data.data.after;
          let postDataList = res.data.data.children;
          postDataList = postDataList.map((post: any) => {
            const postData = post.data;
            return {
              id: postData.id,
              author: postData.author,
              author_url: 'https://www.reddit.com/r/' + postData.subreddit + '/',
              post_url: postData.permalink,
              topic_name: postData.link_flair_text,
              title: postData.title,
              upvote_ratio: postData.upvote_ratio * 100,
              url: postData.url,
              count_comments: postData.num_comments,
              count_karma: postData.ups,
              created: new Date(postData.created * 1000),
              self_text: postData.selftext,
            };
          });
          return {
            postDataList,
            afterKey,
          };
        })
        .then(({
                 postDataList,
                 afterKey,
               }) => {
          fetchPostsSuccess(postDataList, afterKey);
        });
    } catch (e: any) {
      console.log(e)
      fetchPostsFailure(e.toString());

    }
  },
});

export default postsRequestAsync;
