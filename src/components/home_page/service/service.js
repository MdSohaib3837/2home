import React from "react";
import { Grid, Container } from "@mui/material";
import "./service.scss";

const Service = () => {
  return (
    <Container>
      <Grid className="flex justify-center">
        <Grid item xs={12} lg={10} sm={12} className="py-12 service-home-main">
          <Grid container className="flex justify-center">
            <Grid item xs={12} lg={10} sm={12}>
              <div>
                <h1 className="font-[Poppins] font-bold text-[30px] text-center">
                  <span className="text-[#222222]"> SecondHome </span>
                  <span className=" heading-linear"> it's before all</span>
                </h1>
              </div>
              <Grid
                container
                spacing={2}
                className="pt-[40px]"
                justifyContent={"center"}
              >
                <Grid lg={6} item md={6} sm={6}>
                  <div class="grid">
                    <figure class="effect-sadie">
                      <img
                        src={require("../../../assets/images/homepage/one.png")}
                        alt="img02"
                        className="w-full h-56"
                      />
                      <figcaption>
                        <h2 className="font-semibold text-[24px] lg:text-[26px] font-[Poppins]">
                          A real expertise
                        </h2>
                        <p className="font-[OpenSans] text-[14px] lg:text-[16px] text-[16px] p-[14px] lg:p-[20px] md:p-[20px] sm:p-[14px]">
                          Our entire team accompanies you throughout the process
                          of your real tourism transaction and this with the aim
                          of making the experience more possible harmonious.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </Grid>
                <Grid lg={6} item md={6} sm={6}>
                  <div class="grid">
                    <figure class="effect-sadie">
                      <img
                        src={require("../../../assets/images/homepage/two.png")}
                        alt="img02"
                        className="w-full h-56"
                      />
                      <figcaption>
                        <h2 className="font-semibold text-[24px] lg:text-[26px] font-[Poppins]">
                        A unique service

                        </h2>
                        <p className="font-[OpenSans] text-[14px] lg:text-[16px] text-[16px] p-[14px] lg:p-[20px] md:p-[20px] sm:p-[14px]">
                          Our entire team accompanies you throughout
                          the process of your tourism transaction and this
                          with the aim of making the experience more harmonious
                          as possible.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </Grid>
                <Grid lg={6} item md={6} sm={6}>
                  <div class="grid">
                    <figure class="effect-sadie">
                      <img
                        src={require("../../../assets/images/homepage/three.png")}
                        alt="img02"
                        className="w-full h-56"
                      />
                      <figcaption>
                        <h2 className="font-semibold text-[24px] lg:text-[26px] font-[Poppins]">
                          Tailor-made advice
                        </h2>
                        <p className="font-[OpenSans] text-[14px] lg:text-[16px] text-[16px] p-[14px] lg:p-[20px] md:p-[20px] sm:p-[14px]">
                          Our entire team accompanies you throughout
                          the process of your tourism transaction and this
                          with the aim of making the experience more possible
                          harmonious.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </Grid>
                <Grid lg={6} item md={6} sm={6}>
                  <div class="grid">
                    <figure class="effect-sadie">
                      <img
                        src={require("../../../assets/images/homepage/four.png")}
                        alt="img02"
                        className="w-full h-56"
                      />
                      <figcaption>
                        <h2 className="font-semibold text-[24px] lg:text-[26px] font-[Poppins]">
                          Constant monitoring
                        </h2>
                        <p className="font-[OpenSans] text-[14px] lg:text-[16px] text-[16px] p-[14px] lg:p-[20px] md:p-[20px] sm:p-[14px]">
                          Our entire team accompanies you throughout
                          the process of your tourism transaction and this
                          with the aim of making the experience more possible
                          harmonious.
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Service;
