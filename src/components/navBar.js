import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { useCartContext } from "../context/cartContext";

const NavBar = () => {
  const { total_item } = useCartContext();

  const [isOpen, setOpen] = useState(false);
  const onRequestClose = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <div className="relative z-10">
      <div className="hidden sm:block">
        <div className="flex flex-row my-5 mx-3 ">
          <ul className="flex flex-row items-center gap-x-5 text-2xl font-medium text-primary-50">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <FaOpencart className="w-10 h-10 mt-1" />
                <span className="absolute top-3 right-5 font-semibold text-xl text-primary-50">
                  {total_item}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:hidden mx-3 my-6">
        <div className="flex flex-row text-4xl font-medium text-primary-50">
          <button onClick={openModal}>
            <RiMenuFoldFill />
          </button>
          <MobileNavBar isOpen={isOpen} onRequestClose={onRequestClose} />
        </div>
      </div>
    </div>
  );
};

const MobileNavBar = ({ isOpen, onRequestClose }) => {
  const { total_item } = useCartContext();

  return isOpen ? (
    <div className="flex flex-col my-5 mx-3 absolute z-20 -right-3 -top-6 bg-primary-500 h-[100vh] w-[100vw]">
      <button className="p-4" onClick={onRequestClose}>
        <VscChromeClose />
      </button>
      <ul
        onClick={onRequestClose}
        className="flex flex-col items-center gap-x-5 text-3xl font-medium space-y-6 text-primary-50"
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaOpencart className="w-20 h-20 mt-3" />
          </NavLink>
        </li>
      </ul>
    </div>
  ) : null;
};

export default NavBar;
