import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useToken } from './hooks/useToken';
import './main.global.scss';
import { Header } from './shared/Components/Header';
import { Layout } from './shared/Components/Layout';
import { Post } from './shared/Components/Post';
import { NotFoundPage } from './shared/Pages/NotFoundPage';
import { PostsPage } from './shared/Pages/PostsPage';

const AppComponent = () => {
	useToken()
	return (
      <Layout>
        <Header />
        <Outlet />
      </Layout>
	)
}

const AppRouter = () => {
	const [redirect, setRedirect] = useState(false)
	useEffect(() => {
		setRedirect(true)
	}, [])

	return (
		<Routes>
			{redirect &&
        <Route path="/" element={<AppComponent />}>
        	<Route index element={<Navigate to="/posts" />} />
        	<Route path="/auth" element={<Navigate to="/posts" />} />
        	<Route path="/auth/:query" element={<Navigate to="/posts" />} />
        	<Route path="/posts" element={<PostsPage />}>
        		<Route path=":postId" element={<Post />} />
        	</Route>
        </Route>
			}
			{redirect && <Route path="*" element={<NotFoundPage />} />}
		</Routes>
	)
}

export const App = hot(() =>
  <AppRouter />
)
