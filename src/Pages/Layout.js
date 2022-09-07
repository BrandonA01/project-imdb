import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navigation/nav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;