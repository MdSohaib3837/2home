import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.scss";
import { Grid, Container } from "@mui/material";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import ChevronLeftTwoToneIcon from "@mui/icons-material/ChevronLeftTwoTone";
import CardComponent from "../../card/card";
import { cardData } from "../../../pages/result_page/constant";

const windowWidth = window.innerWidth;
const SliderSection = () => {
  console.log("wndow", windowWidth);
  const ref = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#003030]">
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={12} sm={12} className="py-12 slider-home-main">
            <Grid container>
              <Grid item xs={12} lg={3} sm={12} md={4}>
                <div className="py-[20px]">
                  <h1 className="font-[Poppins] font-bold text-[30px]">
                    <span className="text-[#ffffff]">Discover our latest</span>
                    <span className="heading-linear-last"> favorites</span>
                  </h1>
                </div>
              </Grid>
              <Grid item xs={12} lg={9} sm={12} md={8}>
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  ref={ref}
                  partialVisible={true}
                  // centerMode={windowWidth < 768 ? true : false}
                  autoPlay={false}
                  swipeable={false}
                >
                  {cardData?.slice(0, 5)?.map((single) => (
                    <div className="mx-[20px]">
                      <CardComponent data={single} />
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
            <Grid container justifyContent={"end"} className="mt-[20px]">
              <button
                className="m-[10px]"
                onClick={() => {
                  ref.current.previous();
                }}
              >
                <ChevronLeftTwoToneIcon className="bg-[#ffffff] rounded-full" />
              </button>
              <button
                className="m-[10px]"
                onClick={() => {
                  ref.current.next();
                }}
              >
                <ChevronRightTwoToneIcon className="bg-[#ffffff] rounded-full" />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default SliderSection;
