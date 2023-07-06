import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productContext";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Biss Ecommerce",
  };
  return (
    <div>
      {myName}
      <HeroSection data={data} />
    </div>
  );
};

export default About;
