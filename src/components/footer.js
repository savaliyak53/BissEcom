import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-400 mt-16">
      <section className="flex justify-center mt-5 relative -top-12">
        <div className="flex justify-between items-center w-2/3 h-24 rounded-md bg-primary-50 px-5">
          <div className="font-medium text-primary-400 text-xl gap-y-2">
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <NavLink to="/contact">
            <button className="bg-primary-400 p-3 font-medium rounded-md text-primary-50 my-auto">
              GET STARTED
            </button>
          </NavLink>
        </div>
      </section>
      <footer className="text-center text-primary-50">
        <div className=" grid grid-cols-5 mobile:flex flex-col gap-x-4 w-2/3 mx-auto mb-6">
          <div className=" text-start mobile:mb-6">
            <h3 className="mb-4 mobile:mb-0 font-medium text-xl">
              {" "}
              Biss Technical{" "}
            </h3>
            <p>Lorem10 qqwedcw </p>
            <p>Lorem10 qqwedcw </p>
          </div>
          <div className="text-start col-span-2 mobile:mb-6">
            <h3 className="mb-4 font-medium mobile:mb-2 text-xl">
              Subscribe to get important updates
            </h3>
            <form>
              <input className="p-2" type="email" placeholder="your-e-mail" />
              <input className="block  py-2" type="submit" value="SUBSCRIBE" />
            </form>
          </div>
          <div className="text-start mobile:mb-6">
            <h3 className="mb-4 font-medium text-xl  mobile:mb-2">Follow us</h3>
            <div className="flex gap-x-1 ">
              <div className="bg-primary-500 rounded-full">
                <a href="https://www.facebook.com">
                  <FaFacebook className="m-2 text-3xl" />
                </a>
              </div>
              <div className="bg-primary-500 rounded-full">
                <a href="https://www.twitter.com">
                  <FaTwitter className="m-2 text-3xl" />
                </a>
              </div>
              <div className="bg-primary-500 rounded-full">
                <a href="https://www.instagram.com">
                  <FaInstagram className="m-2 text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-start">
            <h3 className="mb-4 font-medium text-xl mobile:mb-0">Call us</h3>
            <a href="tel:123456789">+123456789</a>
          </div>
        </div>
        <hr className="bg-primary-50" />
        <div className="mt-3">
          <p>
            @{new Date().getFullYear()}dadfefwecd efcvs dffv sdsdsf edv dscs
          </p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
