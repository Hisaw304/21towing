import React from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import TowingIntro from "../components/TowingIntro";
import AccidentStats from "../components/AccidentStats";
import TowingServices from "../components/TowingServices";
import ScheduleTow from "../components/ScheduleTow";
import Reviews from "../components/Review";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <TowingIntro />
      <AccidentStats />
      <TowingServices />
      <ScheduleTow />
      <Reviews />
    </div>
  );
};

export default Home;
