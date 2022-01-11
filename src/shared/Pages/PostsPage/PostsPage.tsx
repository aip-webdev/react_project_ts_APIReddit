import React from 'react';
import { Outlet } from 'react-router-dom';
import { CardList } from '../../Components/CardList';
import { Content } from '../../Components/Content';

export function PostsPage() {
	return (
		<Content>
			<CardList />
			<Outlet />
		</Content>
	)
}
