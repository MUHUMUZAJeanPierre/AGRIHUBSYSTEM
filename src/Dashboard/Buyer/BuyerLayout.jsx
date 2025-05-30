import React from "react";
import { Outlet } from "react-router-dom";
import BuyerSideBar from "./BuyerSideBar";

const BuyerLayout = (props) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-20 md:w-64 fixed h-full z-20">
        <BuyerSideBar />
      </div>
      <section className="flex-1 ml-20 md:ml-64 p-4 sm:p-6 bg-gray-50 min-h-screen">
        <Outlet />
        {props.children}
      </section>
    </div>
  );
};

export default BuyerLayout;
