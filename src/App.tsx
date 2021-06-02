import {hot} from 'react-hot-loader/root';
import React from "react";
import './main.global.scss';
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";

function AppComponent() {
   const [token] = useToken();
    return (
        <tokenContext.Provider value={token}>
            <PostsContextProvider>
                <UserContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardList />
                        </Content>
                    </Layout>
                </UserContextProvider>
            </PostsContextProvider>
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />);
