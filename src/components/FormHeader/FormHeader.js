import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./FormHeader.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CITIES from "../../assets/static-data/cities";

export default function Searchform() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="Container">
      <div className="Form">
        <FontAwesomeIcon icon={faBed} className="Icon" />
        {/* <input
          type="text"
          placeholder="where are you going?"
          className="formSearchInput"
        /> */}

        <select name="cities">
          <option value="default" defaultChecked>
            Select city
          </option>
          {CITIES.map((city) => (
            <option value={city.toLowerCase()} defaultChecked>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="Form">
        <FontAwesomeIcon icon={faCalendarDays} className="Icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="formSearchText"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="Form">
        <FontAwesomeIcon icon={faPerson} className="Icon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="formSearchText"
        >{`${options.room} room.${options.adult} adult · ${options.children} children `}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Form">
        <Button
          variant="contained"
          size="medium"
          className="FormButton"
          onClick={() => navigate("/result")}
        >
          Apply Bid
        </Button>
      </div>
    </div>
  );
}
