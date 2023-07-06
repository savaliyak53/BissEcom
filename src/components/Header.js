import { NavLink } from "react-router-dom";
import NavBar from "./navBar";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-primary-400 to-primary-400 flex flex-row justify-between sticky z-20 top-0">
      <NavLink to="/" className="float-left">
        <div className="text-primary-50 w-16 font-medium text-3xl ml-3 my-2">
          <FaOpencart className="w-10 h-10 mt-1 mx-auto" />
          BISS
        </div>
      </NavLink>
      <NavBar />
    </div>
  );
};

export default Header;
