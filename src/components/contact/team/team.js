import React from "react";
import { Grid } from "@mui/material";
import "./team.scss";
import Ilyas from "../../../assets/images/homepage/Ilyas.jpg";
import Sohaib from "../../../assets/images/homepage/sohaib.jpg";

const Team = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={11}
        lg={8}
        sm={11}
        className="py-12 about-home-main !mb-16"
      >
        <Grid container justifyContent="space-between" marginLeft={40}>
          <Grid item xs={12} lg={12} sm={12}>
            <Grid container spacing={2} className="pt-[40px] ml-40">
              <Grid lg={3} item xs={12} sm={6} md={3}>
                <img src={Ilyas} alt="" className="h-72" />
                <div className="pt-4 text-center">
                  <h1 className="font-[OpenSans] font-bold">Muhammad Ilyas</h1>
                  <p className="text-[#222222] font-[OpenSans] ">
                    muhammad.bsse3757@iiu.edu.pk
                  </p>
                </div>
              </Grid>

              <Grid lg={3} item xs={12} sm={6} md={3}>
                <img src={Sohaib} alt="" className="h-72 " />
                <div className="pt-4 text-center">
                  <h1 className="font-[OpenSans] font-bold ">
                    Muhammad Sohaib
                  </h1>
                  <p className="text-[#222222] font-[OpenSans] ">
                    muhammad.bsse3837@iiu.edu.pk
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
