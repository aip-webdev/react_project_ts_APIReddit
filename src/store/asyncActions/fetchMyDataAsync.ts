import axios from 'axios';
import useStore from '../index';

const fetchMyDataAsync = () => ({
  fetchMyDataAsync: () => {
    let state = useStore.getState()
    let { token, fetchMyData, fetchMyDataSuccess, fetchMyDataFailure } = state
    if (!token) return;
    fetchMyData();

    (async () => {
      try {
        await axios
          .get('https://oauth.reddit.com/api/v1/me', {
            headers: { Authorization: `bearer ${token}` },
          })
          .then(res => {
            const userData = res.data

            fetchMyDataSuccess({
                name: userData.name,
                iconImg: userData.icon_img,
              },
            )
          })
      } catch (e: any) {
        fetchMyDataFailure(e.toString());
        localStorage.removeItem('reddit-token')
      }
    })()
  }
})

export default fetchMyDataAsync
