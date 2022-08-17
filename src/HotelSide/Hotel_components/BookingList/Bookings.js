import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

import DatePicker from "react-datepicker";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "firstName", headerName: "First name", width: 190 },
  { field: "lastName", headerName: "Last name", width: 190 },
  { field: "status", headerName: "Status", width: 150 },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 150,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", date: "2 / 1 / 2022" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", date: "2 / 1 / 2022" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", date: "5 / 1 / 2022" },
  { id: 4, lastName: "Stark", firstName: "Arya", date: "5 / 1 / 2022" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", date: "6 / 1 / 2022" },
  { id: 6, lastName: "Melisandre", firstName: null, date: "9 / 1 / 2022" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", date: "10 / 1 / 2022" },
  { id: 8, lastName: "Frances", firstName: "Rossini", date: "12 / 1 / 2022" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", date: "12 / 1 / 2022" },
];

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
        <div class="col-span-10 ml-4 pr-4">
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
                      <div className="Features flex flex-row place-items-center !justify-between !gap-24 !ml-0 !mr-0">
                        <span className=" service">
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
          <div className="section-container pt-4 ml-4 pr-4">
            <div className="w-full font-[OpenSans] bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Booking List
            </div>
            <div class="w-full font-[OpenSans]">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      // checkboxSelection
                    />
                  </div>
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
