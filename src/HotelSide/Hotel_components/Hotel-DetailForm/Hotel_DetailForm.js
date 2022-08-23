import React from "react";
import { useState } from "react";
import "./Hotel_DetailForm.scss";
import Navbar from "../navbar/Navbar";
import { Checkbox, Divider, FormControlLabel, FormGroup } from "@mui/material";
import CITIES from "../../../assets/static-data/cities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faMugSaucer,
  faParking,
  faSmoking,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import * as BsIcons from "react-icons/go";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Header from "../../../pages/header/header";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

///*Firebase Files//////////////
import { firestore, signUp } from "../../../firebase";
import { addDoc, collection } from "@firebase/firestore";

const HotelForm = () => {
  const navigate = useNavigate();
  const [time, setTime] = React.useState(new Date("2020-01-01 12:00"));
  const [wifi, setWifi] = React.useState();
  const [parking, setParking] = React.useState();
  const [breakfast, setBreakfast] = React.useState();
  const [lunch, setLunch] = React.useState();
  const [dinner, setDinner] = React.useState();
  const [smoking, setSmoking] = React.useState();
  const [children, setChildren] = React.useState();
  const [onlinepayment, setOnlinepayment] = React.useState();
  const [onArrival, setOnArrival] = React.useState();
  const [policy1, setPolicy1] = React.useState();
  const [policy2, setPolicy2] = React.useState();
  const [policy3, setPolicy3] = React.useState();
  const [accomodationType, setAccomodationType] = useState();
  const [destination, setDestination] = useState();
  const firebaseRef = collection(firestore, "Hotel_Details");
  const hotelNameRef = useRef();
  const descriptionRef = useRef();
  const contactRef = useRef();
  const keyFeature1Ref = useRef();
  const keyFeature2Ref = useRef();
  const keyFeature3Ref = useRef();
  const accommodationRef = useRef();
  const cityRef = useRef();
  const areaRef = useRef();
  const whatsappRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();
  const HandleAccomodationChange = (e) => {
    e.preventDefault();
    setAccomodationType({
      ...accomodationType,
      [e.target.name]: e.target.value,
    });
  };

  const HandleCITYChange = (e) => {
    e.preventDefault();
    setDestination({
      ...destination,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("ddd", hotelNameRef.current.value);
    event.preventDefault();
    const data = {
      hotelname: hotelNameRef.current.value,
      description: descriptionRef.current.value,
      referenceContact: contactRef.current.value,
      keyfeature1: keyFeature1Ref.current.value,
      keyfeature2: keyFeature2Ref.current.value,
      keyfeature3: keyFeature3Ref.current.value,
      accomodationType: accommodationRef.current.value,
    };
    console.log(data);
    try {
      signUp(data);
      addDoc(firebaseRef, data);
      navigate("/home");
    } catch (error) {}
  };

  console.log("Wifi", wifi);
  console.log("Parking", parking);
  console.log("Breakfast", breakfast);
  console.log("Lunch", lunch);
  console.log("Dinner", dinner);
  console.log("Smoking", smoking);
  console.log("Children", children);
  console.log("Online_payment", onlinepayment);
  console.log("OnArrival", onArrival);
  console.log("Policy1", policy1);
  console.log("Policy2", policy2);
  console.log("Policy3", policy3);
  console.log("FormData.AccomodationType", accomodationType);
  console.log("Select City", destination);
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
          {/* //Hotel Details */}
          <div className="section-container">
            <div className="w-full font-[OpenSans] bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Hotel Details
            </div>
            <div class="w-full font-[OpenSans]">
              <form
                method="POST"
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div class="mb-4">
                  <label
                    class=" font-[OpenSans] block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Hotel Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="hotelname"
                    name="hotelname"
                    type="text"
                    placeholder="Hotel Name"
                    required
                    inputref={hotelNameRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Description
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    inputref={descriptionRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Contact Reference Name
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="reference_name"
                    name="referenceContact"
                    type="text"
                    placeholder="Reference Name (optional)"
                    inputref={contactRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Key Feature 1
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="key_feature_1"
                    name="keyfeature1"
                    type="text"
                    placeholder="key feature"
                    inputref={keyFeature1Ref}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Key Feature 2
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="key feature 1"
                    name="keyfeature2"
                    type="text"
                    placeholder="key feature"
                    inputref={keyFeature2Ref}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Key Feature 3
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="key feature 1"
                    name="keyfeature3"
                    type="text"
                    placeholder="key feature"
                    inputref={keyFeature3Ref}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Accommodation Type
                  </label>
                  <select
                    onClick={HandleAccomodationChange}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="accomodationType"
                    ref={accommodationRef}
                  >
                    <option value="default" defaultChecked>
                      Select
                    </option>
                    <option>Hotel</option>
                    <option>Guest House</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* //Address */}
          <div className="section-container">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Address
            </div>
            <div class="w-full">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      City
                    </label>
                    <div class="relative">
                      <select
                        onClick={HandleCITYChange}
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        name="Selected_City"
                        ref={cityRef}
                      >
                        <option value="default" defaultChecked>
                          Select city
                        </option>
                        {CITIES.map((city) => (
                          <option value={city.toLowerCase()} defaultChecked>
                            {city}
                          </option>
                        ))}
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Area
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Area"
                    type="text"
                    placeholder="Area"
                    ref={areaRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Whatsapp No
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="Whatsapp_No"
                    type="text"
                    placeholder="Whatsapp No"
                    ref={whatsappRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Address
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Address"
                    ref={addressRef}
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Geo Address
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Geo Location
                "
                  />
                </div>
              </form>
            </div>
          </div>
          {/*Map*/}
          <div className="section-container">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Location
            </div>
            <div class="w-full">
              <h1>Map will be imported here by using api</h1>
            </div>
          </div>
          {/* features */}
          <div className="section-container">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Features
            </div>
            <div class="w-full">
              <div class="flex-row shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4 flex-row">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <div className="Features flex flex-row place-items-center !justify-between">
                      <span className="service">
                        <FormControlLabel
                          control={
                            <Checkbox
                              className="Check_Box ml-[8px]"
                              value="wifi"
                              onChange={() => setWifi(!wifi)}
                              color="primary"
                            />
                          }
                        />
                        <FontAwesomeIcon icon={faWifi} className="Icon" />
                        Wifi
                      </span>

                      <span className="P-Service service">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="parking"
                              onChange={() => setParking(!parking)}
                              color="primary"
                            />
                          }
                        />
                        <FontAwesomeIcon icon={faParking} className="Icon" />
                        Parking
                      </span>
                      <span className="S-Service service">
                        <FormControlLabel
                          control={
                            <Checkbox
                              className="Check_Box "
                              value="smoking"
                              onChange={() => setSmoking(!smoking)}
                              color="primary"
                            />
                          }
                        />
                        <FontAwesomeIcon icon={faSmoking} className="Icon" />
                        Smoking
                      </span>
                    </div>
                    <div className="Features">
                      <div>
                        <span className="service C-Service">
                          <FormControlLabel
                            control={
                              <Checkbox
                                className="Check_Box"
                                value="children"
                                onChange={() => setChildren(!children)}
                                color="primary"
                              />
                            }
                          />
                          <FontAwesomeIcon icon={faChild} className="Icon" />
                          Children Allowed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Restaurants */}
          <div>
            <div className="section-container">
              <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
                Restaurants
              </div>
              <div class="w-full">
                <div class="flex-row shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4 flex-row">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <div className="Features flex flex-row place-items-center !justify-between">
                        <span className="B-Service service ">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="breakfast"
                                onChange={() => setBreakfast(!breakfast)}
                                color="primary"
                              />
                            }
                          />
                          <FontAwesomeIcon
                            icon={faMugSaucer}
                            className="Icon"
                          />
                          BreakFast
                        </span>
                        <span className="L-Service service">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="lunch"
                                onChange={() => setLunch(!lunch)}
                                color="primary"
                              />
                            }
                          />
                          <FontAwesomeIcon icon={faUtensils} className="Icon" />
                          Lunch
                        </span>
                        <span className="D-Service service">
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="dinner"
                                onChange={() => setDinner(!dinner)}
                                color="primary"
                              />
                            }
                          />
                          <FontAwesomeIcon icon={faUtensils} className="Icon" />
                          Dinner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Options */}
          <div className="section-container w-full">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Payment Options
            </div>

            <div class="P1-para shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-8">
              <p className="font-[OpenSans] pt-4 pb-4">
                Click here and not payment on arrival to guarantee your
                cancellation policy as we will hold the booking from your
                guests.
              </p>
              <div class="mb-8">
                <FormControlLabel
                  control={
                    <Checkbox
                      className="Check_Box"
                      value="onlinepayment"
                      onChange={() => setOnlinepayment(!onlinepayment)}
                      color="primary"
                    />
                  }
                />

                <p className="font-[OpenSans] pt-8 inline">
                  <strong>Online Payment</strong> {"("} If you want allow
                  SecondHome booking to online transfer to the hotel specified
                  account on every first and 15th of the month to pay the amount
                  pending.{")"}
                </p>
                <div>
                  <Divider className="pt-2 mb-2" />
                </div>
                <div className="w-full">
                  <FormControlLabel
                    control={
                      <Checkbox
                        className="Check_Box"
                        value="onArrival"
                        onChange={() => setOnArrival(!onArrival)}
                        color="primary"
                      />
                    }
                  />
                  <p className="font-[OpenSans] pt-4 inline">
                    <strong>Payment On Arrival</strong>
                    {" ("}If you want to enable the customer to pay on arrival
                    as well.
                    {")"}
                    We do not recommend to enable payment on arrival as
                    SecondHome can’t guarantee your cancellation policy given
                    the guest will pay cash on arrival and we will not hold a
                    deposit, unlike with any of our SecondHome Payment Methods
                    offer to you above.
                  </p>
                  <div className="pt-2 font-[OpenSans]">
                    <strong>
                      If there is no Payment on Arrival chosen and you choose to
                      get paid on either your EasyPaisa / Jazzcash / Bank
                      Transfer / Cash Cheque we will be able to take online
                      payments from guests guaranteeing your chosen cancellation
                      policy and applicable fees for no-show or cancelled guests
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="section-container">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Cancelation Policies
            </div>
            <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-8">
              <div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        className="Check_Box"
                        value="policy1"
                        onChange={() => setPolicy1(!policy1)}
                        color="primary"
                      />
                    }
                  />
                  <strong>Policy 1</strong>{" "}
                </div>
                <ul className="font-[OpenSans] pt-2 pb-2">
                  <li className="flex items-center gap-4">
                    <BsIcons.GoPrimitiveDot />
                    <p>
                      0% fee applies if cancelled before 48 hours prior to
                      arrival
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <BsIcons.GoPrimitiveDot />
                    <p>
                      50% fee applies if cancelled within 48 hours prior to
                      arrival
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        className="Check_Box"
                        value="policy2"
                        onChange={() => setPolicy2(!policy2)}
                        color="primary"
                      />
                    }
                  />
                  <strong>Policy 2</strong>
                </div>
                <ul className="font-[OpenSans] pt-2 pb-2">
                  <li className="flex items-center gap-4">
                    <BsIcons.GoPrimitiveDot />
                    <p>
                      20% fee applies if cancelled before 48 hours prior to
                      arrival
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <BsIcons.GoPrimitiveDot />
                    <p>
                      100% fee applies if cancelled within 48 hours prior to
                      arrival
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        className="Check_Box"
                        value="policy3"
                        onChange={() => setPolicy3(!policy3)}
                        color="primary"
                      />
                    }
                  />
                  <strong>Policy 3</strong>
                </div>
                <ul className="font-[OpenSans] pt-2 pb-2">
                  <li className="flex items-center gap-4">
                    {" "}
                    <BsIcons.GoPrimitiveDot />
                    <p>0% fee applies if cancelled </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="section-container w-full">
            <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
              Images
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <Button
                className="!bg-[#003030]"
                variant="contained"
                component="label"
                ref={imageRef}
              >
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className="!bg-[#003030] !ml-6"
                ref={imageRef}
              >
                <input ref={imageRef} hidden accept="image/*" type="file" />
                <PhotoCamera className="!text-white" />
              </IconButton>
            </div>
          </div>
          <div className="pb-[100px]">
            <Button
              variant="contained"
              className="!bg-[#003030] !text-white !items-center"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelForm;
