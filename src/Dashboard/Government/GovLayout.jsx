import React from "react";
import { Outlet } from "react-router-dom";
import GovSidebar from "./GovSidebar";

const GovLayout = (props) => {
  return (
    <div className="flex">
      <div className=" fixed">
        <GovSidebar />
      </div>
      <section className="w-[96rem]  pl-[42vh]">
        <Outlet />
        {props.children}
      </section>
    </div>
  );
};

export default GovLayout;
