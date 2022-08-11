import React from "react";

import Main from "../../components/home_page/main/main";
import AboutHome from "../../components/home_page/about/about";
import Testmonial from "../../components/home_page/testmonial/testmonial";
import Service from "../../components/home_page/service/service";
import Banner from "../../components/home_page/banner/banner";
import Team from "../../components/home_page/team/team";
import SliderSection from "../../components/home_page/slider/slider";
import CardComponent from "../../components/card/card";


const HomePage = () => {
  return (
    <div>
      <Main />
      <AboutHome />
      <Team />
      <Service />
      <SliderSection />
      <Testmonial />
      <Banner />

      
    </div>
  );
};

export default HomePage;
