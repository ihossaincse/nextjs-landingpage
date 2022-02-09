import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Startup Agency Modern Landing</title>
        <meta name="description" content="Startup Agency Modern Landing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
