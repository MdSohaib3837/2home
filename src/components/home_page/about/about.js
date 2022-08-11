import React from "react";
import { Grid, Container } from "@mui/material";
import "./about.scss";

const AboutHome = () => {
  return (
    <Container>
      <Grid
        justifyContent="center"
        className="my-[60px] about-home-main flex justify-center"
      >
        <Grid container xs={12} lg={10} sm={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} lg={5} sm={5}>
              <div>
                <h1 className="font-[Poppins] font-bold text-[30px] ">
                  <span className="heading-linear">About</span>
                  <span className="text-[#222222]"> Us</span>
                </h1>
                <p className="pt-[30px] text-[#666666] font-[OpenSans]">
                  Second Home is a trusted website for people to list, discover,
                  and book unique accommodations around Pakistan - online. We
                  provide the best luxury apartments, stay, and service.
                </p>
                <p className="pt-[15px] text-[#666666] font-[OpenSans]">
                  You can spend the most luxurious time and have the best
                  memories with us. “When in doubt, just take the next small
                  step”.
                </p>
                <p className="pt-[30px] text-[#666666] font-[OpenSans]">
                  Your trust and loyalty are our greatest satisfaction.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={5} sm={5} className="py-[20px]">
              <div>
                <img
                  src={require("../../../assets/images/homepage/logomaison.png")}
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutHome;
