import React from "react";
import { Outlet } from "react-router-dom";
import BuyerSideBar from "./BuyerSideBar";

const BuyerLayout = (props) => {
  return (
    <div className="flex">
      <div className=" fixed">
        <BuyerSideBar />
      </div>
      <section className="w-[96rem]  pl-[42vh]">
        <Outlet />
        {props.children}
      </section>
    </div>
  );
};

export default BuyerLayout;
