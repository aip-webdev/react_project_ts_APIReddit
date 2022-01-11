import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import useStore from '../store';

export interface IUserData {
	name?: string
	iconImg?: string
}

export const useUserData = (): {data: IUserData; loading: boolean} => {
  const {data, loading, token, fetchMyDataAsync} = useStore((state) => ({
    data: state.me.myData,
    loading: state.me.loading,
    token:state.token,
    fetchMyDataAsync: state.fetchMyDataAsync
  }), shallow)

	useEffect(() => {
		fetchMyDataAsync()
	}, [token])

	return { data, loading }
}
