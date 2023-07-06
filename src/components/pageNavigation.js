import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="h-max w-[20%] ml-3">
      <NavLink className="text-primary-500 font-medium text-2xl" to="/">
        Home/
      </NavLink>
      <span className="text-primary-500 font-medium text-2xl whitespace-nowrap ">
        {title}
      </span>
    </div>
  );
};

export default PageNavigation;
