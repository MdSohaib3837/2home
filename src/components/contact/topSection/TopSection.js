import React from "react";
import { Grid } from "@mui/material";
import "./TopSection.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/images/contact/full_grey.svg";
import location from "../../../assets/images/contact/location.svg";
import phone from "../../../assets/images/contact/phone.svg";
import mail from "../../../assets/images/contact/mail.svg";

const TopSection = () => {
  return (
    <>
      <div class="container mx-auto lg:w-full xs:w-full md:w-full">
        <div class="container mx-auto lg:w-4/5 xs:w-full md:w-full mt-8">
          <h1 className="font-[Poppins] font-bold  text-center">
            <span className="text-[#222222] lg:text-[40px] md:text-[40px] xs:text-[40px]">
              Contact
            </span>
          </h1>
          <h2 className="pt-[10px] text-[#949AA4] font-[Poppins] font-semibold lg:text-[26px]  md:text-[16px] xs:text-[16px] text-center">
            We are happy to help and advise you.
          </h2>
          <h2 className="text-[#949AA4] font-[Poppins] font-semibold lg:text-[26px] md:text-[16px] xs:text-[16px] text-center">
            Contact Us or go through our agency
          </h2>
        </div>
        <div class="container mx-auto lg:w-11/12 xs:w-full md:w-full">
          <img
            src={require("../../../assets/images/contact/group.png")}
            alt="img02"
            className="w-full h-auto"
          />
        </div>

        <div class="grid lg:col-12 md:lg:col-12 xs:lg:col-12">
          <div class="lg:col-start-4 lg:col-span-2 md:col-start-2 md:col-span-1 lg:max-w-[350px] md:max-w-[300px] xs:max-w-[250px] ">
            <Card className="lg:-mt-16 md:-mt-12 xs:-mt-0 logodiv borderRadius h-80">
              <CardContent>
                <img src={logo} className="center"></img>
              </CardContent>
            </Card>
          </div>
          <div class="lg:col-start-6 lg:col-span-4 md:col-start-3 md:col-span-2   lg:max-w-[350px] md:max-w-[300px] xs:max-w-[250px] ">
            <Card className="font-[OpenSans]  lg:-mt-16 md:-mt-12 xs:-mt-0 borderRadius h-80">
              <CardContent>
                <img src={location} className="location-icon"></img>
                <Typography
                  sx={{ fontSize: 16 }}
                  variant="h3"
                  color="text.secondary"
                  className="font-[OpenSans] text-center location-style ml-10"
                >
                  International Islamic
                </Typography>
                <Typography
                  sx={{ fontSize: 16 }}
                  variant="h3"
                  color="text.secondary"
                  className="font-[OpenSans] text-center locplus-style "
                >
                  University Islamabad H-10
                </Typography>
                <img src={phone} className="phone-icon"></img>
                <Typography
                  sx={{ fontSize: 16 }}
                  variant="h3"
                  color="text.secondary"
                  className="font-[OpenSans] text-center phone-style"
                >
                  +923365119459
                </Typography>
                <img src={mail} className="email-icon"></img>
                <Typography
                  sx={{ fontSize: 16 }}
                  variant="h3"
                  color="text.secondary"
                  className="font-[OpenSans] text-center mail-style"
                >
                  secondhome@pk.com
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
