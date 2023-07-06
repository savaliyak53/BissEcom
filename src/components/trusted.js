import React from "react";
import InstagramIcon from "../images/instagram.svg";
import FacebookIcon from "../images/facebook.svg";
import GoogleIcon from "../images/google.svg";
import AmazonIcon from "../images/amazon.svg";
import TwitterIcon from "../images/twitter.svg";

const Trusted = () => {
  return (
    <div className="bg-primary-400 w-[46%] rounded-lg mx-auto mobile:px-3 text-center text-primary-50 py-3">
      <h3 className="text-2xl font-medium mb-3">Trusted by 1000+ Companies</h3>
      <div className=" flex justify-center gap-x-5 mb-4">
        <a href="https://www.facebook.com/">
          <img src={FacebookIcon} alt="facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src={InstagramIcon} alt="instagram" />
        </a>
        <a href="https://www.amazon.com/">
          <img src={AmazonIcon} alt="amazon" />
        </a>
        <a href="https://www.google.com/">
          <img src={GoogleIcon} alt="google" />
        </a>
        <a href="https://www.twitter.com/">
          <img src={TwitterIcon} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Trusted;
