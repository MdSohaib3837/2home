import React from "react";
import { Grid, Container } from "@mui/material";
import "./team.scss";

const Team = () => {
  return (
    <Container>
      <Grid className="flex justify-center">
        <Grid item xs={12} lg={12} sm={12} className="py-12 about-home-main">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} lg={12} sm={12}>
              <div>
                <h1 className="font-[Poppins] font-bold text-[30px] text-center">
                  <span className="text-[#222222]">Done</span>
                  <span className=" heading-linear"> Our knowledge</span>
                </h1>
                <p className="pt-[30px] text-[#666666] font-[OpenSans] text-[16px] text-center italic">
                  "The best things that happen in the world of the company are
                  not the result of the work of a single man. It's the work of a
                  whole team."
                </p>
                <p className="text-right text-[#666666] font-[OpenSans] text-[12px]">
                  Citation Steve Job
                </p>
              </div>
              <Grid container spacing={2} className="pt-[40px]">
                <Grid
                  lg={3}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className="image-wrapper"
                >
                  <div class="card relative cursor-pointer xl:block lg:block hidden">
                    <img
                      className="image h-[250px] m-auto relative"
                      src={require("../../../assets/images/homepage/team/Adrianno.png")}
                      alt="Card Back"
                    />
                    <div className="">
                      <img
                        src={require("../../../assets/images/homepage/team/Adrianno2.png")}
                        alt=""
                        className=" h-[250px] m-auto img-top relative"
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h1 className="font-[OpenSans] font-bold">
                        Adraino RICCI
                      </h1>
                      <p className="text-[#666666] text-[14px] font-[OpenSans] ">
                        Directeur
                      </p>
                    </div>
                  </div>
                  <div class="cursor-pointer lg:hidden xl:hidden block my-[10px]">
                    <img
                      className="image h-[250px] m-auto relative"
                      src={require("../../../assets/images/homepage/team/Adrianno2.png")}
                      alt="Card Back"
                    />
                    <div className="pt-4 text-center">
                      <h1 className="font-[OpenSans] font-bold">
                        Adraino RICCI
                      </h1>
                      <p className="text-[#666666] text-[14px] font-[OpenSans] ">
                        Directeur
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid
                  lg={3}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className="image-wrapper"
                >
                  <div class="card cursor-pointer xl:block lg:block hidden">
                    <img
                      className="image h-[250px] m-auto relative"
                      src={require("../../../assets/images/homepage/team/clement.png")}
                      alt="Card Back"
                    />
                    <div className="h-full w-full top-0 ">
                      <img
                        src={require("../../../assets/images/homepage/team/clement2.png")}
                        alt=""
                        className=" h-[250px] m-auto img-top relative"
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h1 className="font-[OpenSans] font-bold">
                        Clément VIEGAS
                      </h1>
                      <p className="text-[#666666] text-[14px] font-[OpenSans] ">
                        Equipe commerciale
                      </p>
                    </div>
                  </div>
                  <div class="cursor-pointer lg:hidden xl:hidden block my-[10px]">
                    <img
                      className="image h-[250px] m-auto relative"
                      src={require("../../../assets/images/homepage/team/clement2.png")}
                      alt="Card Back"
                    />
                    <div className="pt-4 text-center">
                      <h1 className="font-[OpenSans] font-bold">
                        Clément VIEGAS
                      </h1>
                      <p className="text-[#666666] text-[14px] font-[OpenSans] ">
                        Equipe commerciale
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid
                  lg={3}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  className="image-wrapper"
                >
                  <div class="cursor-pointer lg:hidden xl:hidden block my-[10px]">
                    <img
                      className="image h-[250px] m-auto relative"
                      src={require("../../../assets/images/homepage/team/team4color.png")}
                      alt="Card Back"
                    />
                    <div className="pt-4 text-center">
                      <h1 className="font-[OpenSans] font-bold">
                        Clément VIEGAS
                      </h1>
                      <p className="text-[#666666] text-[14px] font-[OpenSans] ">
                        Equipe commerciale
                      </p>
                    </div>
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

export default Team;
