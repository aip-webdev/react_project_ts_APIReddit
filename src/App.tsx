import {hot} from 'react-hot-loader/root';
import React from "react";
import './main.global.scss';
import {Provider} from "react-redux";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import {store} from "./store";
import {useToken} from "./hooks/useToken";

function AppComponent() {
    useToken();

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    );
}
export const App = hot(() => <Provider store={store}><AppComponent /></Provider>);
