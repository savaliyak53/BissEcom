import React from "react";
import { NavLink } from "react-router-dom";
import HeroImg from "../images/hero.jpg";

const HeroSection = (props) => {
  const { data } = props;
  return (
    <>
      <div className="bg-gradient-to-r from-primary-300 to-primary-100 py-10 px-5">
        <div className="flex mobile:flex-col justify-center items-center">
          <div className="w-96 h-96 text-primary-50">
            <p className="text-3xl mb-2">Welcome To</p>
            <h1 className="text-5xl font-bold mb-2 hover:text-primary-500">
              {data.name}
            </h1>
            <p className="text-xl leading-8 mb-2">
              By setting the container's height height: 100vh;, you ensure that
              the content is vertically centered within the visible portion of
              the page viewport. Adjust the height as needed for your specific
              layout.
            </p>
            <NavLink to="/product">
              <button
                type="button"
                className="bg-primary-400 hover:bg-primary-500 text-2xl rounded font-medium p-3"
              >
                Shop now
              </button>
            </NavLink>
          </div>
          <div className="col2">
            <img src={HeroImg} alt="img" className="mobile:w-96 w-[30rem] object-cover h-96"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
