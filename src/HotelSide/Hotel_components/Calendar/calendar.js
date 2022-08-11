import { Button, TextField } from "@mui/material";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function Schedule() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <Navbar />
      </div>
      <div class="col-span-10">
        <div className="">
          <Header />
        </div>
        <div className=" !mt-8">
          <h1 className="font-[OpenSans] font-bold text-3xl">Calendar</h1>
          <div className="flex flex-col !items-center">
            <h2 className="text-2xl mt-12">Add New Event</h2>
            <div className="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-2 flex flex-col !items-center">
              <TextField
                type="text"
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="w-[80%] mr-[10px] !border-2 !border-black"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
              <DatePicker
                placeholderText="Start Date"
                className="bg-white shadow-md rounded !mt-4 !font-[OpenSans] !text-black !py-2"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="End Date"
                className="bg-white shadow-md rounded !mt-4 !font-[OpenSans] !text-black !py-2"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />

              <Button
                className="!mt-8 !font-[OpenSans] !bg-[#003030] !text-white !py-2"
                variant="contained"
                onClick={handleAddEvent}
              >
                Add Event
              </Button>
            </div>
          </div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
