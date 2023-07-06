import React, { useState } from "react";

const MyImage = ({ image = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(image[0]);
  return (
      <figure className=" w-[70%] mr-4 mobile:-mx-16 mobile:mb-16">
        <img
          src={mainImg.url}
          alt={mainImg.filename}
          className="w-[100%] h-[100%]"
        />
        <div className="flex justify-center mt-3">
          {image.map((items, index) => {
            return (
              <img
                src={items?.url}
                alt={items?.filename}
                className="w-12 h-12 mr-4"
                key={index}
                onMouseEnter={() => setMainImg(items)}
              ></img>
            );
          })}
        </div>
      </figure>
  );
};

export default MyImage;
