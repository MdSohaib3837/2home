import React from "react";
import { Grid, Container } from "@mui/material";
import "./testmonial.scss";

const Testmonial = () => {
  return (
    <Container>
      <Grid container className="pt-[20px] flex justify-center">
        <Grid item xs={12} lg={12}>
          <div className="background-image-testmonial ">
            <div className="lg:p-[44px] p-[16px] md:p-[44px] lg:w-1/2 w-full md:w-1/2">
              <h1 className="font-[Poppins] font-bold text-[30px] ">
                Don't miss an opportunity
              </h1>
              <p className="pt-[30px] text-[#666666] font-[OpenSans]">
                Register in our database !<br />
                This us will proactively contact you as soon as we return a
                property that might interest you !
              </p>
              <div className="pt-[30px] ">
                <button class="font-[OpenSans] text-[14px] bg-white text-[#003030] font-bold py-2 px-4 border border-[#DDDDDD] rounded">
                  Subscribe to the list
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testmonial;
