import React from 'react';
import {CardList} from "../../Components/CardList";
import {Content} from "../../Components/Content";
import {Outlet} from "react-router-dom";

export function PostsPage() {
    return (
        <Content>
            <CardList/>
            <Outlet/>
        </Content>
    );
}
