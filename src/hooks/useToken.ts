import { useEffect } from 'react';
import shallow from 'zustand/shallow';

import useStore from '../store';

export const useToken = (): string[] => {
	const { token, setToken } = useStore((state) => ({
    token:state.token,
    setToken: state.setToken
  }), shallow)

	useEffect(() => {
    const localStorageToken = localStorage.getItem('reddit-token')
    const token = localStorageToken || window.__token__

    if (token !== 'undefined' && !localStorageToken) {
      localStorage.setItem('reddit-token', token)
     setToken(token)
    } else if (token !== 'undefined') {
      setToken(token)
    }
	}, [])

	return [token]
}
