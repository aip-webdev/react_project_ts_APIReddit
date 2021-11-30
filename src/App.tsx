import {hot} from 'react-hot-loader/root';
import React from "react";
import './main.global.scss';
import {Provider} from "react-redux";
import {store} from "./store";
import {useToken} from "./hooks/useToken";
import {Route, Routes} from 'react-router-dom';
import {RequiredAuth} from "./shared/Components/RequiredAuth";
import {HomePage} from "./shared/Pages/HomePage";
import {PostsPage} from "./shared/Pages/PostsPage";
import {NotFoundPage} from "./shared/Pages/NotFoundPage";

function AppComponent() {
    useToken();

    return (
        <Routes>
            <Route path='/' element={<RequiredAuth><HomePage/></RequiredAuth>}>
                <Route path='posts/*' element={<RequiredAuth><PostsPage/></RequiredAuth>}/>
                <Route path='*' element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}

export const App = hot(() => <Provider store={store}><AppComponent/></Provider>);
