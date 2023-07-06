import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/services";
import Trusted from "./components/trusted";
import FeatureProduct from "./components/featureProduct";

const Home = () => {
  const data = {
    name: "Biss Store",
  };
  return (
    <div className="z-10">
      <HeroSection data={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
