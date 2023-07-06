import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="flex justify-center gap-x-5 mx-6 text-primary-50">
      <div className="bg-primary-400 rounded-xl h-52 mobile:h-64 mobile:w-60 my-5 px-5 flex flex-col justify-center items-center">
        <div className="rounded-full bg-primary-300 w-14 h-14">
          <TbTruckDelivery className="text-4xl relative top-3 left-3" />
        </div>
        <h3 className="mobile:mt-3 text-center">
          Super Fast and Free Delivery System
        </h3>
      </div>
      <div>
        <div className="bg-primary-400 mobile:hidden rounded-xl h-24 mt-5 mb-[12px] px-3 flex flex-col justify-center items-center">
          <div className="rounded-full bg-primary-300 w-14 h-14">
            <MdSecurity className="text-4xl relative top-3 left-[8px]" />
          </div>
          <h3>Non-contact Shipping</h3>
        </div>
        <div className="bg-primary-400 mobile:hidden rounded-xl h-24 px-3 flex flex-col justify-center items-center">
          <div className="rounded-full bg-primary-300 w-14 h-14">
            <GiReceiveMoney className="text-4xl relative top-3 left-[8px]" />
          </div>
          <h3>Money-back Guaranteed</h3>
        </div>
      </div>
      <div className="bg-primary-400 rounded-xl h-52 mobile:h-64 mobile:w-60  my-5 px-5 flex flex-col justify-center items-center">
        <div className="rounded-full bg-primary-300 w-14 h-14">
          <RiSecurePaymentLine className="text-4xl relative top-3 left-3" />
        </div>
        <h3 className=" mobile:mt-3 text-center">
          Super Secure Payment System
        </h3>
      </div>
    </div>
  );
};

export default Services;
