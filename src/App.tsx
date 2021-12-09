import {hot} from 'react-hot-loader/root';
import React, {useEffect, useState} from "react";
import './main.global.scss';
import {Provider} from "react-redux";
import {store} from "./store";

import {Layout} from "./shared/Components/Layout";
import {Header} from "./shared/Components/Header";
import {useToken} from "./hooks/useToken";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./shared/Pages/NotFoundPage";
import {PostsPage} from "./shared/Pages/PostsPage";
import {Post} from "./shared/Components/Post";

function AppComponent() {
    useToken();
    return (
        <Layout>
            <Header/>
            <Outlet/>
        </Layout>
    );
}

function AppRouter() {
    const [redirect, setRedirect] = useState(false)


    useEffect(() => {
        setRedirect(true);
    }, [])

    return (
        <Routes>
            {redirect &&
            <Route path='/' element={<AppComponent/>}>
                <Route index element={<Navigate to='/posts'/>}/>
                <Route path='/auth' element={<Navigate to='/posts'/>}/>
                <Route path='/auth/:query' element={<Navigate to='/posts'/>}/>
                <Route path='/posts' element={<PostsPage/>}>
                    <Route path=':postId' element={<Post />}/>
                </Route>
            </Route>
            }
            {redirect &&<Route path='*' element={<NotFoundPage/>}/>}

        </Routes>)
}

export const App = hot(() => <Provider store={store}><AppRouter/></Provider>);
