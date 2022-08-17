import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BreakpointController from "../../components/breakpoint_controller/breakpoint_controller";
import { IoIosCloseCircleOutline } from "react-icons/io";

// image imports here
import Logo from "../../assets/images/logos/round_grey.svg";
import LogoFull from "../../assets/images/logos/full_green.svg";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg";
import Facebook from "../../assets/icons/social/facebook.svg";
import Instagram from "../../assets/icons/social/instagram.svg";

import "./header.scss";

const MobileHeader = () => {
  const [menuState, setMenuState] = useState(false);

  const navigate = useNavigate();

  const handleMenuChange = () => {
    setMenuState(!menuState);
  };

  return (
    <Grid container>
      <div className="w-full h-[70px] bg-[#003030] flex justify-between items-center relative px-[20px] box-border relative">
        <div className="w-full h-[70px] absolute top-0 left-0 flex justify-center">
          <div className="h-[106px] w-[112px] rounded-[50px] bg-[#003030] flex justify-center items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-[90px] h-[90px] object-contain cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
        <div className="flex relative">
          <img
            src={Phone}
            alt="phone"
            className="h-[24px] w-[24px] object-contain cursor-pointer"
          />
          <img
            src={Mail}
            alt="mail"
            className="h-[24px] w-[24px] object-contain cursor-pointer ml-[27px]"
          />
        </div>
        <div
          className="flex flex-col w-[25px] h-[25px] justify-between cursor-pointer relative"
          onClick={handleMenuChange}
        >
          <div className="w-full h-[3px] rounded-[2px] bg-white" />
          <div className="w-full h-[3px] rounded-[2px] bg-white" />
          <div className="w-full h-[3px] rounded-[2px] bg-white" />
        </div>
      </div>
      {/* side menu overlay */}
      <div
        className="w-full h-screen absolute top-0 left-0 flex box-border pr-[15px] animated"
        style={{
          opacity: menuState ? 1 : 0,
          transform: menuState ? "translateX(0px)" : "translateX(-100vw)",
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
            <p className="font-[Poppins] font-semibold text-[26px] text-[#222] mt-[20px]">
              The real estate<br></br>experience
            </p>
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
              <p className="font-[OpenSans] font-medium text-[16px] text-[#003030] uppercase">
                à vendre
              </p>
              <p className="font-[OpenSans] font-medium text-[16px] text-[#003030] uppercase mt-[20px]">
                à louer
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
    </Grid>
  );
};

const DesktopHeader = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <div className="w-full h-[70px] bg-[#003030] flex justify-between items-center relative">
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <div className="w-full h-[70px] absolute top-0 left-0 flex justify-center">
              <div className="h-[106px] w-[112px] rounded-[50px] bg-[#003030] flex justify-center items-center">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[90px] h-[90px] object-contain cursor-pointer"
                  onClick={() => navigate("/home")}
                />
              </div>
            </div>
            <div className="flex relative">
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
            <div className="flex relative">
              <p className="font-[OpenSans] font-regular text-[16px] text-white mr-[70px] cursor-pointer uppercase">
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
        </Container>
      </div>
      <div className="w-full h-[35px] bg-white flex justify-between items-center">
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            className="relative"
          >
            <div className="flex">
              <div className="flex items-center">
                <img
                  src={Mail}
                  alt="mail"
                  className="h-[18px] w-[18px] object-contain mr-[10px]"
                />
                <p className="font-[OpenSans] font-regular text-[16px] text-[#949AA4] mr-[70px]">
                  secondhome@pk.com
                </p>
              </div>
              <div className="flex  items-center">
                <img
                  src={Phone}
                  alt="phone"
                  className="h-[18px] w-[18px] object-contain mr-[10px]"
                />
                <p className="font-[OpenSans] font-regular text-[16px] text-[#949AA4]">
                  +923365119459
                </p>
              </div>
            </div>
          </Grid>
        </Container>
      </div>
    </Grid>
  );
};

export default function Header() {
  return (
    <Grid container>
      <BreakpointController direction="up" breakpoint="sm">
        <MobileHeader />
      </BreakpointController>
      <BreakpointController direction="down" breakpoint="sm">
        <DesktopHeader />
      </BreakpointController>
    </Grid>
  );
}
