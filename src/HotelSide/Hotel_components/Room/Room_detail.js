import React, { useState } from "react";
import "../Hotel-DetailForm/Hotel_DetailForm.scss";
import Navbar from "../navbar/Navbar";
import {
  faChild,
  faMugSaucer,
  faParking,
  faSmoking,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Header from "../../../pages/header/header";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";

const Room_detail = () => {
  const [items, setItems] = useState({
    privateBathroom: false,
    toiletPaper: false,
    bathtub: false,
    shower: false,
    slippers: false,
    toilet: false,
    bathrobe: false,
    hairDryer: false,
    spaBath: false,
  });
  const handleItemsChange = (event) => {
    setItems({
      ...items,
      [event.target.name]: event.target.checked,
    });
  };
  const {
    privateBathroom,
    toiletPaper,
    bathtub,
    shower,
    slippers,
    toilet,
    bathrobe,
    hairDryer,
    spaBath,
  } = items;
  const error =
    [
      privateBathroom,
      toiletPaper,
      bathtub,
      shower,
      slippers,
      toilet,
      bathrobe,
      hairDryer,
      spaBath,
    ].filter((v) => v).length == 1;
  const [bedType, setBedType] = useState({
    singleBed: 0,
    doubleBed: 0,
  });
  const [guest, setGuest] = useState({
    guestNumber: 1,
  });
  const [similarRooms, setSimilarRooms] = useState({
    similarRooms: 0,
  });
  const handleRoomTypeOption = (name, operation) => {
    setBedType((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? bedType[name] + 1 : bedType[name] - 1,
      };
    });
  };
  const handleGuestOption = (name, operation) => {
    setGuest((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? bedType[name] + 1 : bedType[name] - 1,
      };
    });
  };
  const handleSimilarRoomOption = (name, operation) => {
    setSimilarRooms((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? bedType[name] + 1 : bedType[name] - 1,
      };
    });
  };
  return (
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <Navbar />
      </div>
      <div class="col-span-10 ml-4 pr-4">
        <div className="!px-8">
          <Header />
        </div>

        <div className="hotel-form mt-8">
          {/* //Add Room Form */}
          <div className="section-container font-[OpenSans]">
            <div className="w-full font-[OpenSans] bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Add Room
            </div>
            <div class="w-full font-[OpenSans]">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Room Name
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Room_Name"
                    type="text"
                    placeholder="Room Name"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Room Price
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Room_Price"
                    type="text"
                    placeholder="Price per night stay"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Discounted price
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Discounted price"
                    type="text"
                    placeholder="Discounted Price"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    What type of room is this?
                  </label>
                  <select
                    class="block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option value="default" defaultChecked>
                      Double
                    </option>
                    <option>Single</option>
                    <option>Family</option>
                  </select>
                </div>
                <div className="mb-6 flex flex-row gap-16 items-center">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Which beds are available in this room?
                  </label>
                  <div className="flex-col">
                    <div className="Form">
                      <div className="flex flex-row">
                        <label class="flex flex-row items-center gap-16 ml-5 text-gray-700 text-sm font-bold mb-2">
                          Single
                          <div className="optionCounter -ml-6">
                            <button
                              className="optionCounterButton"
                              onClick={() =>
                                handleRoomTypeOption("SingleBed", "d")
                              }
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {bedType.singleBed}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() =>
                                handleRoomTypeOption("SingleBed", "i")
                              }
                            >
                              +
                            </button>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="Form">
                      <label class="flex flex-row items-center gap-16 ml-5 text-gray-700 text-sm font-bold mb-2">
                        Double
                        <div className="optionCounter -ml-8">
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleRoomTypeOption("DoubleBed", "d")
                            }
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {bedType.doubleBed}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() =>
                              handleRoomTypeOption("DoubleBed", "i")
                            }
                          >
                            +
                          </button>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row gap-16 items-center">
                  <label class=" block text-gray-700 text-sm font-bold mb-2">
                    How many guests can stay in this room?
                  </label>
                  <label class="flex flex-row items-center ml-2.5 gap-8 text-gray-700 text-sm font-bold mb-2">
                    Guest
                    <div className="optionCounter ml-2">
                      <button
                        className="optionCounterButton"
                        onClick={() => handleGuestOption("Guest", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {guest.guestNumber}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleGuestOption("Guest", "i")}
                      >
                        +
                      </button>
                    </div>
                  </label>
                </div>
                {/* Rooms Quantity in hotel */}
                <div className="mb-6 flex flex-row gap-16 items-center">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    How many similar rooms are in the hotel?
                  </label>
                  <label class="flex flex-row items-center gap-8 text-gray-700 text-sm font-bold mb-2">
                    Rooms
                    <div className="optionCounter">
                      <button
                        className="optionCounterButton"
                        onClick={() =>
                          handleSimilarRoomOption("SimilarRooms", "d")
                        }
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {similarRooms.similarRooms}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() =>
                          handleSimilarRoomOption("SimilarRooms", "i")
                        }
                      >
                        +
                      </button>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Bathroom Details */}
          <div className="section-container">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Bathroom Details
            </div>
            <div class="w-full">
              <div class="flex-row shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4 flex-row">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="Features flex flex-col place-items-center items-start">
                      <FormControl
                        required
                        component="fieldset"
                        sx={{ m: 3 }}
                        variant="standard"
                      >
                        <FormLabel
                          component="legend"
                          className="!text-black mb-2 !font-[OpenSans]"
                        >
                          Is Bathroom Private ?
                        </FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={privateBathroom}
                                onChange={handleItemsChange}
                                name="privateBathroom"
                                className=""
                              />
                            }
                            label="Private Bathroom"
                          />
                        </FormGroup>
                      </FormControl>
                    </div>
                    {/* items available in BathRoom */}
                    <div className="Features">
                      <div>
                        <div className="Features flex flex-col place-items-center items-start !justify-between">
                          <FormControl
                            required
                            error={error}
                            component="fieldset"
                            sx={{ m: 3 }}
                            variant="standard"
                          >
                            <FormLabel
                              component="legend"
                              className="!text-black mb-2 !font-[OpenSans]"
                            >
                              Which items are available in bathroom?
                            </FormLabel>
                            <FormGroup>
                              <div className="!flex !flex-row gap-24">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={toiletPaper}
                                      onChange={handleItemsChange}
                                      name="toiletPaper"
                                      className=""
                                    />
                                  }
                                  label="Toilet_Paper"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bathtub}
                                      onChange={handleItemsChange}
                                      name="bathtub"
                                      className=""
                                    />
                                  }
                                  label="Bathtub"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={shower}
                                      onChange={handleItemsChange}
                                      name="shower"
                                      className=""
                                    />
                                  }
                                  label="Shower"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={slippers}
                                      onChange={handleItemsChange}
                                      name="slippers"
                                      className=""
                                    />
                                  }
                                  label="Slippers"
                                />
                              </div>
                              <div className="!flex !flex-row gap-20">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={toilet}
                                      onChange={handleItemsChange}
                                      name="toilet"
                                      className=""
                                    />
                                  }
                                  label="Toilet"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bathrobe}
                                      onChange={handleItemsChange}
                                      name="bathrobe"
                                      className=""
                                    />
                                  }
                                  label="Bathrobe"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={hairDryer}
                                      onChange={handleItemsChange}
                                      name="hairDryer"
                                      className=""
                                    />
                                  }
                                  label="Hair Dryer"
                                />

                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={spaBath}
                                      onChange={handleItemsChange}
                                      name="spaBath"
                                      className=""
                                    />
                                  }
                                  label="Spa Bath"
                                />
                              </div>
                            </FormGroup>
                            <FormHelperText>
                              Please select atleast two options
                            </FormHelperText>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Restaurants */}

          {/*Upload Room Images */}
          <div className="section-container w-full">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Images
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <Button
                className="!bg-[#003030]"
                variant="contained"
                component="label"
              >
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className="!bg-[#003030] !ml-6"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera className="!text-white" />
              </IconButton>
            </div>
          </div>
          <div className="pb-[100px]">
            <Button
              variant="contained"
              className="!bg-[#003030] !text-white !items-center"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Room_detail;
