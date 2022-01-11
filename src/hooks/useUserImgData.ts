import axios from 'axios';
import { useState } from 'react';
import shallow from 'zustand/shallow';
import useStore from '../store';

export const useUserImgData = (username: string): string[] => {
	const [data, setData] = useState('https://i.redd.it/4qezgmi0x87z.png')
	const token = useStore(state => state.token, shallow)
	if (!token) {
		return [data]
	}
	(async () => {
		await axios
			.get(`https://oauth.reddit.com/user/${username}/about.json`, {
				headers: { Authorization: `bearer ${token}` },
			})
			.then(res => setData(res.data.data.icon_img))
			.catch(console.log)
	})()

	return [data]
}
