import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FirstSection from "../../components/detail-page/firstSection";
import SecondSection from "../../components/detail-page/secondSection";
import ThirdSection from "../../components/detail-page/thirdSection";
import SliderSection from "../../components/home_page/slider/slider";
import "./detailPage.scss";

export default function DetailPage() {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
}
