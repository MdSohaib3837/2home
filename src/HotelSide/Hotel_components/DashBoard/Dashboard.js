import { Container, Grid, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar.js";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logos/full_white.svg";

import React from "react";
import { useState } from "react";
import { SiderbarData } from "../navbar/SidebarData";

import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../pages/header/header.js";

function Dashboard() {
  return (
    <>
      <div class="grid grid-cols-12">
        <div class="col-span-2">
          <Navbar />
        </div>
        <div class="col-span-10">
          <div className="">
            <Header />
          </div>
          <div className="">
            <h1 className="w-full font-[OpenSans] text-3xl text-black justify-center">
              Dashboard
            </h1>
          </div>
          <div class="col-span-2 gap-4 flex hv-1/4 wv-1/4 ">
            {/* Upcoming booking */}
            <div className="w-1/4 bg-teal-900 shadow-md rounded px-4 pt-2 mt-8">
              <div className="upcomingBookings">
                <span className="text-white text-3xl">0</span>
                <Typography className="text-white pt-4">
                  Upcoming Bookings
                </Typography>
                <div class="text-center">
                  <a
                    href="#"
                    className="Upbookings text-xs text-white block relative"
                  >
                    More Info
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </a>
                </div>
              </div>
            </div>
            {/* todays booking */}
            <div className="w-1/4 bg-teal-700 shadow-md rounded px-4 pt-2 mt-8">
              <div className="upcomingBookings">
                <span className="text-white text-3xl">0</span>
                <Typography className="text-white pt-4">
                  Today's Bookings
                </Typography>
                <div class="text-center">
                  <a
                    href="#"
                    className="Upbookings text-xs text-white block relative"
                  >
                    More Info
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </a>
                </div>
              </div>
            </div>
            {/* {Rooms } */}
            <div className="w-1/4 bg-teal-500 shadow-md rounded px-4 pt-2 mt-8">
              <div className="upcomingBookings">
                <span className="text-white text-3xl">0</span>
                <Typography className="text-white pt-4">
                  Rooms Booked
                </Typography>
                <div class="text-center">
                  <a
                    href="#"
                    className="Upbookings text-xs text-white block relative"
                  >
                    More Info
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </a>
                </div>
              </div>
            </div>
            {/* Revenues */}
            <div className="w-1/4 bg-teal-400 shadow-md rounded px-4 pt-2 mt-8">
              <div className="upcomingBookings">
                <span className="text-white text-3xl">PKR 0</span>
                <Typography className="text-white pt-4">
                  Net Revenues
                </Typography>
                <div class="text-center">
                  <a
                    href="#"
                    className="Upbookings text-xs text-white block relative"
                  >
                    More Info
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-container pt-4">
            <div className="w-full font-[OpenSans] bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Pending Booking & Check ins
            </div>
            <div class="w-full font-[OpenSans]">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class=" font-[OpenSans] block text-[#212529] text-sm mb-2"
                    for="username"
                  >
                    No pending Bookings or Check-ins
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
