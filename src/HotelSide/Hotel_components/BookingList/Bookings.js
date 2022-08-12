import React, { useState } from "react";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

import DatePicker from "react-datepicker";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const Bookings = () => {
  const [confirmed, setConfirmed] = React.useState();
  const [pending, setPending] = React.useState();
  const [cancelled, setCancelled] = React.useState();
  const [checkout, setCheckout] = React.useState();
  const [checkin, setCheckin] = React.useState();
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState();

  return (
    <div>
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
              Bookings
            </h1>
          </div>
          {/* Select Booking Search Range  */}
          <div className="inline-flex !items-center">
            <Typography className="items-center !mt-4 !ml-12">From</Typography>
            <DatePicker
              placeholderText="Start Date"
              className="bg-white shadow-md rounded !justify-center !mt-4 ml-[50px] !font-[OpenSans] !text-black !py-2"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <Typography className="items-center !mt-4 !ml-8">To</Typography>
            <DatePicker
              placeholderText="End Date"
              className="bg-white shadow-md rounded !justify-center !mt-4 ml-[50px] !font-[OpenSans] !text-black !py-2"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
          <div>
            <div className="section-container">
              <div className="ml-8 mt-8 py-2 font-[OpenSans] text-gray-500">
                Status
              </div>
              <div class="w-full">
                <div class="flex-row shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4 flex-row">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <div className="Features flex flex-row place-items-center !justify-between !gap-2 !ml-0 !mr-0">
                        <span className=" service ml-4 ">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="confirmed"
                                onChange={() => setConfirmed(!confirmed)}
                                color="primary"
                              />
                            }
                          />
                          Confirmed
                        </span>

                        <span className=" service">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="pending"
                                onChange={() => setPending(!pending)}
                                color="primary"
                              />
                            }
                          />
                          Pending
                        </span>

                        <span className=" service ">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="cancelled"
                                onChange={() => setCancelled(!cancelled)}
                                color="primary"
                              />
                            }
                          />
                          Cancelled
                        </span>

                        <span className=" service ">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="checkout"
                                onChange={() => setCheckout(!checkout)}
                                color="primary"
                              />
                            }
                          />
                          Checkout
                        </span>
                        <span className=" service ">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="checkin"
                                onChange={() => setCheckin(!checkin)}
                                color="primary"
                              />
                            }
                          />
                          Checkin
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-container pt-4">
            <div className="w-full font-[OpenSans] bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Booking List
            </div>
            <div class="w-full font-[OpenSans]">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class=" font-[OpenSans] block text-[#212529] text-sm mb-2"
                    for="username"
                  >
                    loading
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
