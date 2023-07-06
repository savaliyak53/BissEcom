/* eslint-disable jsx-a11y/iframe-has-title */

import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState();

  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(value)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="mt-3 text-primary-500 text-3xl font-medium w-max mx-5">
        Contact Here
      </h1>
      <div className="flex mobile:flex-col justify-center items-center mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.8463259260657!2d71.20163897538758!3d21.59825809182396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395880a2a1e6465b%3A0xb1b21843f496b584!2sJesingpara%2C%20Amreli%2C%20Gujarat%20365601!5e1!3m2!1sen!2sin!4v1687698446203!5m2!1sen!2sin"
          width="40%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 mobile:w-[55%]"
        ></iframe>
        <form
          onSubmit={handlesubmit}
          className="flex mobile:mt-5 mobile:w-[55%] float-left flex-col w-[30%] h-max ml-5 mobile:ml-0 space-y-3"
        >
          <input
            type="text"
            autoComplete="off"
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            className="border p-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:border-2 rounded-md "
          />
          <input
            type="Email"
            placeholder="useremail"
            name="useremail"
            onChange={handleInputChange}
            className="border p-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:border-2 rounded-md "
          />
          <textarea
            rows={4}
            cols={5}
            placeholder="Write your opinions"
            name="opinons"
            onChange={handleInputChange}
            className="border p-2 border-primary-500 focus:outline-none focus:border-primary-500 focus:border-2 rounded-md "
          />
          <button
            type="submit"
            className="bg-primary-500 py-2 text-2xl text-primary-50 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
