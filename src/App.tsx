import {hot} from 'react-hot-loader/root';
import React, {useEffect} from "react";
import './main.global.scss';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import {rootReducer} from "./store";
import thunk from "redux-thunk";
import {saveToken} from "./store/actions/tokenActions/setToken";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
    useEffect(() => {
        // @ts-ignore
        store.dispatch(saveToken())
    }, [])

    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <CardList />
                </Content>
            </Layout>
        </Provider>
    );
}
export const App = hot(() => <AppComponent />);
