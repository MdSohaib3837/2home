import React from "react";
import { Grid, Container } from "@mui/material";
import PropTypes from "prop-types";
import BreakpointController from "../../components/breakpoint_controller/breakpoint_controller";

// image imports here
import Logo from "../../assets/images/logos/full_grey.svg";
import Facebook from "../../assets/icons/social/facebook.svg";
import Instagram from "../../assets/icons/social/instagram.svg";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

import "./footer.scss";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        SecondHome.pk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer(props) {
  const { hasFields } = props;
  const navigate = useNavigate();

  return (
    <Grid container>
      {hasFields ? (
        <div className="w-full h-[470px] bg-[#003030] flex justify-center">
          <Container maxWidth="lg" className="h-full">
            <Grid container alignItems="center" className="h-full">
              <Grid container sm={7} className="h-[345px]">
                <Grid
                  container
                  sm={4}
                  justifyContent="center"
                  className="h-full border-r-[1px] border-r-white/[.4]"
                >
                  <img
                    src={Logo}
                    alt="logo"
                    className="h-[187px] object-contain mt-[15px]"
                  />
                </Grid>
                <Grid
                  container
                  sm={4}
                  className="h-full border-r-[1px] border-r-white/[.4] box-border"
                >
                  <div className="flex flex-col pt-[20px] ml-[30px] box-border h-full justify-between">
                    <div>
                      <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                        Contact
                      </p>
                      <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                        International University<br></br>Islamabad H-10
                      </p>
                    </div>
                    <div>
                      <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                        Telephone
                      </p>
                      <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                        02/345.78.99
                      </p>
                    </div>
                    <div>
                      <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                        Email
                      </p>
                      <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                        secondhome@pk.com
                      </p>
                    </div>
                    <div className="w-full">
                      <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                        Follow Us
                      </p>
                      <div className="flex mt-[15px] w-full justify-center">
                        <img
                          src={Facebook}
                          alt="facebook"
                          className="h-[34px] w-[34px] object-contain cursor-pointer mr-[13px]"
                        />
                        <img
                          src={Instagram}
                          alt="Instagram"
                          className="h-[34px] w-[34px] object-contain cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid
                  container
                  sm={4}
                  className="h-full border-r-[1px] border-r-white/[.4]"
                >
                  <div className="flex flex-col pt-[20px] ml-[30px] box-border h-full ">
                    <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                      Headings
                    </p>
                    <p
                      className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px] cursor-pointer"
                      onClick={() => navigate("/Dashboard")}
                    >
                      HOTEL
                    </p>
                    <p
                      className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px] cursor-pointer"
                      onClick={() => navigate("/home")}
                    >
                      TOURIST
                    </p>
                    <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                      PAYMENTS
                    </p>
                    <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                      Manage Account
                    </p>
                    <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                      Contact Us
                    </p>
                    <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                      Term of Use
                    </p>
                    <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[15px]">
                      Cookies
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid container sm={5} className="h-[345px]">
                <Grid container className="h-full">
                  <div className="flex flex-col ml-[100px] pt-[20px] box-border h-full w-full">
                    <div className="w-full flex justify-between">
                      <div className="h-[43px] rounded-[5px] w-[186px] bg-white/[0.4] box-border p-[12px] flex items-center">
                        <input
                          className="font-[OpenSans] font-regular text-[14px] text-white w-full bg-transparent outline-none footer-input"
                          placeholder="First Name *"
                        />
                      </div>
                      <div className="h-[43px] rounded-[5px] w-[186px] bg-white/[0.4] box-border p-[12px] flex items-center">
                        <input
                          className="font-[OpenSans] font-regular text-[14px] text-white w-full bg-transparent outline-none footer-input"
                          placeholder="Name *"
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-between mt-[15px]">
                      <div className="h-[43px] rounded-[5px] w-[186px] bg-white/[0.4] box-border p-[12px] flex items-center">
                        <input
                          className="font-[OpenSans] font-regular text-[14px] text-white w-full bg-transparent outline-none footer-input"
                          placeholder="Email *"
                        />
                      </div>
                      <div className="h-[43px] rounded-[5px] w-[186px] bg-white/[0.4] box-border p-[12px] flex items-center">
                        <input
                          className="font-[OpenSans] font-regular text-[14px] text-white w-full bg-transparent outline-none footer-input"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-between mt-[15px]">
                      <div className="h-[150px] rounded-[5px] w-full bg-white/[0.4] box-border p-[12px] flex items-center">
                        <textarea
                          className="font-[OpenSans] font-regular text-[14px] text-white w-full h-full bg-transparent outline-none footer-input"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-between mt-[19px]">
                      <button
                        type="center"
                        className="h-[43px] rounded-[5px] w-full bg-white cursor-pointer flex justify-center items-center"
                      >
                        <p className="font-[OpenSans] text-[14px] font-bold text-[#003030]">
                          To Send
                        </p>
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <>
          <BreakpointController direction="down" breakpoint="sm">
            <div className="w-full h-[377px] bg-[#003030] flex justify-center">
              <Container maxWidth="lg" className="h-full">
                <Grid container alignItems="center" className="h-full">
                  <Grid container md={2} className="h-[278px]">
                    <Grid
                      container
                      justifyContent="center"
                      className="h-full border-r-[1px] border-r-white/[.4]"
                    >
                      <img
                        src={Logo}
                        alt="logo"
                        className="h-[187px] object-contain mt-[15px]"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    sm={10}
                    className="h-[278px]"
                    direction="column"
                    justifyContent="space-between"
                  >
                    <Grid container className="h-[120px]">
                      <div className="box-border px-[40px] border-r-[1px] border-r-white/[.4]">
                        <div className="mt-[20px] flex flex-col">
                          <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                            Contact
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[19px] leading-[17px]">
                            International University<br></br>Islamabad H-10
                          </p>
                        </div>
                      </div>
                      <div className="box-border px-[40px] border-r-[1px] border-r-white/[.4]">
                        <div className="mt-[20px] flex flex-col">
                          <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                            Telephone
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[19px] leading-[17px]">
                            +92 336 5119459
                          </p>
                        </div>
                      </div>
                      <div className="box-border px-[40px] border-r-[1px] border-r-white/[.4]">
                        <div className="mt-[20px] flex flex-col">
                          <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                            Email
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[19px] leading-[17px]">
                            secondhome@pk.com
                          </p>
                        </div>
                      </div>
                      <div className="box-border px-[40px]">
                        <div className="mt-[20px] flex flex-col">
                          <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                            Follow Us
                          </p>
                          <div className="flex mt-[10px] w-full">
                            <img
                              src={Facebook}
                              alt="facebook"
                              className="h-[34px] w-[34px] object-contain cursor-pointer mr-[13px]"
                            />
                            <img
                              src={Instagram}
                              alt="Instagram"
                              className="h-[34px] w-[34px] object-contain cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      container
                      justifyContent="flex-end"
                      className="box-border pl-[33px]"
                    >
                      <div className="w-full h-[1px] bg-white/[.4]" />
                    </Grid>
                    <Grid container className="">
                      <Grid container>
                        <div className="w-full box-border px-[40px]">
                          <p className="font-[OpenSans] font-bold text-[16px] text-[#C49676]">
                            Headings
                          </p>
                        </div>
                      </Grid>
                      <Grid container className="pl-[40px]">
                        <Grid container sm={3} direction="column">
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">
                            HOTEL
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">
                            TOURIST
                          </p>
                        </Grid>
                        <Grid container sm={3} direction="column">
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">
                            PAYMENTS
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">
                            Manage Account
                          </p>
                        </Grid>
                        <Grid container sm={3} direction="column">
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">
                            Contact
                          </p>
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">
                            Term of Use
                          </p>
                        </Grid>
                        <Grid container sm={3} direction="column">
                          <p className="font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">
                            Cookies
                          </p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </BreakpointController>
          <BreakpointController direction="up" breakpoint="sm">
            <div className="w-full h-[395px] bg-[#003030] flex justify-center">
              <Container maxWidth="lg" className="h-full">
                <Grid container alignItems="center" className="h-full">
                  <Grid container alignItems="center">
                    <Grid container xs={6} sm={6} className="h-[153px]">
                      <Grid
                        container
                        justifyContent="center"
                        className="h-full border-r-[1px] border-r-white/[.4]"
                      >
                        <img
                          src={Logo}
                          alt="logo"
                          className="h-[126px] object-contain mt-[15px]"
                        />
                      </Grid>
                    </Grid>
                    <Grid container xs={6} sm={6} className="pl-[25px]">
                      <div className="box-border border-b-[1px] border-b-white/[.4] w-full">
                        <div className="mt-[11px] flex flex-col mb-[9px]">
                          <p className="font-[OpenSans] font-bold text-[12px] text-[#C49676]">
                            Contact
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[17px]">
                            International University<br></br>Islamabad H-10
                          </p>
                        </div>
                      </div>
                      <div className="box-border border-b-[1px] border-b-white/[.4] w-full">
                        <div className="mt-[11px] flex flex-col mb-[9px]">
                          <p className="font-[OpenSans] font-bold text-[12px] text-[#C49676]">
                            Telephone
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[17px]">
                            +92 336 5119459
                          </p>
                        </div>
                      </div>
                      <div className="box-border w-full">
                        <div className="mt-[11px] flex flex-col">
                          <p className="font-[OpenSans] font-bold text-[12px] text-[#C49676]">
                            Email
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[17px]">
                            secondhome@pk.com
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid container className="mt-[13px]">
                      <div className="w-full h-[1px] bg-white/[.4]" />
                    </Grid>
                    <Grid container>
                      <Grid container className="mt-[18px]">
                        <p className="font-[OpenSans] font-bold text-[12px] text-[#C49676]">
                          Headings
                        </p>
                      </Grid>
                      <Grid container className="mt-[6px]">
                        <Grid container xs={6} sm={6} direction="column">
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                            HOTEL
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                            TOURIST
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                            PAYMENTS
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                            Manage Account
                          </p>
                          <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                            Contactez nous
                          </p>
                        </Grid>
                        <Grid container xs={6} sm={6} className="h-full">
                          <Grid
                            container
                            direction="column"
                            className="h-[50%]"
                          >
                            <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                              Term of Use
                            </p>
                            <p className="font-[OpenSans] font-regular text-[12px] text-white leading-[26px]">
                              Cookies
                            </p>
                          </Grid>
                          <Grid container className="h-[50%]">
                            <img
                              src={Facebook}
                              alt="facebook"
                              className="h-[30px] w-[30px] object-contain mr-[16px]"
                            />
                            <img
                              src={Instagram}
                              alt="instagram"
                              className="h-[30px] w-[30px] object-contain mr-[16px]"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/*                                         
                                        <Grid container className = "">
                                            <Grid container>
                                                <div className = "w-full box-border px-[40px]">
                                                    <p className = "font-[OpenSans] font-bold text-[16px] text-[#C49676]">Headings</p>
                                                </div>
                                            </Grid>
                                            <Grid container className = "pl-[40px]">
                                                <Grid container sm = {3} direction = "column">
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">HOTEL</p>
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">TOURIST</p>
                                                </Grid>
                                                <Grid container sm = {3} direction = "column">
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">PAYMENTS</p>
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">Manage Account</p>
                                                </Grid>
                                                <Grid container sm = {3} direction = "column">
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">Contact</p>
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[7px] cursor-pointer">Term of  Use</p>
                                                </Grid>
                                                <Grid container sm = {3} direction = "column">
                                                    <p className = "font-[OpenSans] font-regular text-[16px] text-white mt-[20px] cursor-pointer">Cookies</p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid> */}
                </Grid>
              </Container>
            </div>
          </BreakpointController>
        </>
      )}
    </Grid>
  );
}

Footer.defaultProps = {
  hasFields: false,
};

Footer.propTypes = {
  hasFields: PropTypes.bool,
};
