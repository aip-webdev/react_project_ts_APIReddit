import {hot} from 'react-hot-loader/root';
import React from "react";
import './main.global.scss';
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import { TokenContextProvider } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { CommentContextProvider } from "./shared/context/commentsContext";


function AppComponent() {
    return (
        <TokenContextProvider>
            <CommentContextProvider>
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
            </CommentContextProvider>
        </TokenContextProvider>
    );
}

export const App = hot(() => <AppComponent />);
