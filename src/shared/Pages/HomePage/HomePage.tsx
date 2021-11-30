import React from 'react';
import {Header} from "../../Components/Header";
import {Layout} from "../../Components/Layout";
import {Outlet} from "react-router-dom";

export function HomePage( ) {
  return (
      <Layout>
        <Header />
            <Outlet />
      </Layout>
  );
}
