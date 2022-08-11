import React, { useState } from "react";
import { Grid, Container, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BreakpointController from "../../breakpoint_controller/breakpoint_controller";
import { IoIosCloseCircleOutline } from "react-icons/io";

// image imports here
import Logo from "../../../assets/images/logos/full_white.svg";
import LogoFull from "../../../assets/images/logos/full_green.svg";
import BrandText from "../../../assets/images/texts/real_estate_exp_single.svg";
import Dropdown from "../../../assets/icons/dropdown.svg";
import Facebook from "../../../assets/icons/social/facebook.svg";
import Instagram from "../../../assets/icons/social/instagram.svg";
import BookingForm from "../../FormHeader/FormHeader";
import "./main.scss";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

export default function Main() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuState, setMenuState] = useState(false);

  const navigate = useNavigate();

  const handleMenuChange = () => {
    setMenuState(!menuState);
  };

  const [adult, setAdult] = React.useState("");
  const [rooms, setRooms] = React.useState(0);

  const handleChange = (event) => {
    setAdult(event.target.value);
  };
  const handleChangeRoom = (event) => {
    setRooms(event.target.value);
  };

  return (
    <Grid container className="relative">
      <div className="w-full h-screen absolute top-0 left-0 overflow-hidden">
        <BreakpointController direction="down" breakpoint="sm">
          <video
            width="100%"
            height="600px"
            className="object-cover"
            autoPlay
            muted
            loop
          >
            <source
              src={require("../../../assets/video/video_homepageb.mp4")}
              type="video/mp4"
            />
          </video>
        </BreakpointController>
        <BreakpointController direction="up" breakpoint="sm">
          <video width="100%" height="100%" autoPlay muted loop>
            <source
              src={require("../../../assets/video/video_responsive.mp4")}
              type="video/mp4"
            />
          </video>
        </BreakpointController>
      </div>
      <div className="w-full h-screen flex box-border p-[27px] relative">
        <Container maxWidth="lg">
          <Grid container>
            <BreakpointController direction="down" breakpoint="sm">
              <Grid container justifyContent="space-between">
                <div className="flex items-center">
                  <p
                    className="font-[OpenSans] font-regular text-[16px] text-white mr-[70px] cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    HOTEL
                  </p>
                  <p
                    className="font-[OpenSans] font-regular text-[16px] text-white cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    TOURIST
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-[OpenSans] font-regular text-[16px] text-white mr-[70px] uppercase cursor-pointer">
                    Bookings
                  </p>
                  <p className="font-[OpenSans] font-regular text-[16px] text-white mr-[70px] cursor-pointer">
                    PAYMENTS
                  </p>
                  <p
                    className="font-[OpenSans] font-regular text-[16px] text-white cursor-pointer"
                    onClick={() => navigate("/contact")}
                  >
                    CONTACT
                  </p>
                </div>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <img
                  src={Logo}
                  alt="logo"
                  className="h-[256px] object-contain"
                />
                <img
                  src={BrandText}
                  alt="brand text"
                  className="w-[540px] object-contain mt-[67px]"
                />
              </Grid>
            </BreakpointController>
            <BreakpointController direction="up" breakpoint="sm">
              <Grid container justifyContent="flex-end">
                <div
                  className="flex flex-col w-[25px] h-[25px] justify-between cursor-pointer relative"
                  onClick={handleMenuChange}
                >
                  <div className="w-full h-[3px] rounded-[2px] bg-white" />
                  <div className="w-full h-[3px] rounded-[2px] bg-white" />
                  <div className="w-full h-[3px] rounded-[2px] bg-white" />
                </div>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <img
                  src={Logo}
                  alt="logo"
                  className="h-[256px] object-contain mt-[50px]"
                />
                <img
                  src={BrandText}
                  alt="brand text"
                  className="w-[540px] object-contain mt-[50px]"
                />
              </Grid>
              {/* side menu overlay */}
              <div
                className="w-full h-screen fixed top-0 left-0 flex box-border pr-[15px] animated z-[2]"
                style={{
                  opacity: menuState ? 1 : 0,
                  transform: menuState
                    ? "translateX(0px)"
                    : "translateX(-100vw)",
                }}
              >
                <div className="w-full h-full bg-white header-sidemenu-container flex flex-col box-border px-[29px] py-[10px] relative">
                  <Grid container>
                    <img
                      src={LogoFull}
                      alt="logo"
                      className="h-[100px] object-contain"
                    />
                  </Grid>

                  <Grid container>
                    <div className="flex mt-[30px]">
                      <img
                        src={Facebook}
                        alt="facebook"
                        className="h-[30px] w-[30px] object-contain cursor-pointer mx-[16px]"
                      />
                      <img
                        src={Instagram}
                        alt="instagram"
                        className="h-[30px] w-[30px] object-contain cursor-pointer"
                      />
                    </div>
                  </Grid>
                  <Grid container>
                    <div className="flex flex-col mt-[62px]">
                      <p className="font-[OpenSans] font-medium text-[16px] text-[#003030] uppercase mt-[20px]">
                        For rent
                      </p>
                      <p className="font-[OpenSans] font-medium text-[16px] text-[#003030] uppercase mt-[20px]">
                        Bookings
                      </p>
                      <p className="font-[OpenSans] font-medium text-[16px] text-[#003030] uppercase mt-[20px]">
                        PAYMENTS
                      </p>
                    </div>
                  </Grid>
                  <Grid container>
                    <button
                      type="button"
                      className="h-[43px] w-[139px] rounded-[5px] bg-[#003030] cursor-pointer flex justify-center items-center mt-[51px]"
                    >
                      <p className="font-[OpenSans] font-bold text-[14px] text-white/[0.9]">
                        Contact Us
                      </p>
                    </button>
                  </Grid>
                  {/* close button */}
                  <div
                    className="absolute top-[13px] right-[13px]"
                    onClick={handleMenuChange}
                  >
                    <IoIosCloseCircleOutline size="2em" color="#003030" />
                  </div>
                </div>
              </div>
            </BreakpointController>
            <BreakpointController direction="down" breakpoint="sm">
              <Grid container justifyContent="center">
                <BookingForm />
              </Grid>
            </BreakpointController>
            <BreakpointController direction="up" breakpoint="sm">
              <Grid container justifyContent="center">
                <div className="max-w-[651px] w-[115%] h-[150px] flex flex-col mt-[50px]">
                  <div className="flex">
                    <div
                      className="w-[185px] h-[46px] bg-white rounded-tl-[5px] rounded-tr-[5px] flex justify-center items-center main-search-container-tab relative cursor-pointer"
                      style={{ zIndex: activeTab === 0 && 1 }}
                      onClick={() => setActiveTab(0)}
                    >
                      <div className="flex justify-center relative">
                        <p className="font-[OpenSans] font-bold text-[16px] text-[#003030]">
                          HOTEL
                        </p>
                        <div
                          className="w-[15px] h-[2px] bg-[#003030] absolute bottom-[-5px] animated"
                          style={{
                            opacity: activeTab === 0 ? 1 : 0,
                            transform:
                              activeTab === 0
                                ? "translateY(0px)"
                                : "translateY(7px)",
                          }}
                        />
                      </div>
                      <div className="w-full h-[20px] bg-white absolute top-[95%] left-0" />
                    </div>
                    <div
                      className="w-[185px] h-[46px] bg-white rounded-tl-[5px] rounded-tr-[5px] flex justify-center items-center main-search-container-tab relative cursor-pointer"
                      style={{ zIndex: activeTab === 1 && 1 }}
                      onClick={() => setActiveTab(1)}
                    >
                      <div className="flex justify-center relative">
                        <p className="font-[OpenSans] font-bold text-[16px] text-[#003030]">
                          TOURIST
                        </p>
                        <div
                          className="w-[15px] h-[2px] bg-[#003030] absolute bottom-[-5px] animated"
                          style={{
                            opacity: activeTab === 1 ? 1 : 0,
                            transform:
                              activeTab === 1
                                ? "translateY(0px)"
                                : "translateY(7px)",
                          }}
                        />
                      </div>
                      <div className="w-full h-[20px] bg-white absolute top-[95%] left-0" />
                    </div>
                    <div
                      className="w-[185px] h-[46px] bg-white rounded-tl-[5px] rounded-tr-[5px] flex justify-center items-center main-search-container-tab relative cursor-pointer"
                      style={{ zIndex: activeTab === 2 && 1 }}
                      onClick={() => setActiveTab(2)}
                    >
                      <div className="flex justify-center relative">
                        <div
                          className="w-[15px] h-[2px] bg-[#003030] absolute bottom-[-5px] animated"
                          style={{
                            opacity: activeTab === 2 ? 1 : 0,
                            transform:
                              activeTab === 2
                                ? "translateY(0px)"
                                : "translateY(7px)",
                          }}
                        />
                      </div>
                      <div className="w-full h-[20px] bg-white absolute top-[95%] left-0" />
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] main-search-container relative flex flex-col items-center justify-center box-border p-[25px]">
                    <div className="w-full h-[43px] rounded-[5px] bg-[#F1F4F6] box-border px-[16px] py-[12px] flex justify-between items-center cursor-pointer">
                      <p className="font-[OpenSans] font-regular text-[14px] text-[#949AA4]/[0.9]">
                        Type
                      </p>
                      <img
                        src={Dropdown}
                        alt="dropdown arrow"
                        className="h-[10px] w-[10px] object-contain"
                      />
                    </div>
                    <div className="w-full h-[43px] rounded-[5px] bg-[#F1F4F6] flex justify-center items-center box-border px-[16px] py-[12px] mt-[15px]">
                      <input
                        className="font-[OpenSans] font-regular text-[14px] text-black main-search-input bg-transparent outline-none w-full"
                        placeholder="Code postal"
                      />
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="w-[94px] h-[43px] rounded-[5px] bg-[#003030] flex justify-center items-center cursor-pointer mt-[15px]">
                        <p className="font-[OpenSans] font-bold text-[14px] text-white/[0.9]">
                          Look for
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </BreakpointController>
          </Grid>
        </Container>
      </div>
    </Grid>
  );
}
