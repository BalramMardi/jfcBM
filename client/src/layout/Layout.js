import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Navbar />
      <Topbar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Jamshedpur FC",
  description: "Jamshedpur FC official website",
  keywords: "JFC,ISL,IndianFootball,JamKeKhelo",
  author: "BalramMardi",
};

export default Layout;
