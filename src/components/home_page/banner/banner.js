import React from "react";
import { Grid, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import "./banner.scss";

const Banner = () => {
  return (
    <Container>
      <Grid container justifyContent="center" className="my-[60px]">
        <Grid item xs={12} lg={12}>
          <div className="main-banner rounded rounded-[15px] flex lg:p-[30px] sm:p-[20px] md:p-[30px] p-[16px]">
            <div>
              <div
                style={{
                  background: "#f6f6f6",
                  padding: "14px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  width: "45px",
                  height: "60%",
                }}
              ></div>
              <div
                style={{
                  background: "#f6f6f6",
                  padding: "14px",
                  borderTopLeftRadius: "20px",
                  width: "45px",
                  height: "38%",
                  marginTop: "8px",
                }}
              ></div>
            </div>
            <div className="lg:px-12 md:px-12 px-4 flex-1 ">
              <div className="flex items-center">
                <Avatar
                  alt="Remy Sharp"
                  src={"/static/images/avatar/1.jpg"}
                  sx={{ width: 60, height: 60 }}
                />
                <div className="pl-6">
                  <h1 className="font-[OpenSans] font-bold">Muhammad Uzair</h1>
                  <h1 className="font-[OpenSans] text-[#666666]">
                    Booking a Room
                  </h1>
                </div>
              </div>
              <p className="text-[#222222] font-[OpenSans] pt-4">
                When booking my house, I was pleasantly surprised by the
                complete follow-up of the entire team throughout the process,
                even after the act. A big thank you to you!!
              </p>
            </div>
            <div>
              <div
                style={{
                  background: "#f6f6f6",
                  padding: "14px",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  width: "45px",
                  height: "60%",
                }}
              ></div>
              <div
                style={{
                  background: "#f6f6f6",
                  padding: "14px",
                  borderTopRightRadius: "20px",
                  width: "45px",
                  height: "38%",
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
