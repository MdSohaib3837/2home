import React from "react";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

const payment = () => {
  return (
    <div>
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
                Payments
              </h1>
            </div>
            <div class="mb-6 flex flex-row w-1/4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Commission
              </label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="default" defaultChecked>
                  Select city
                </option>
                <option>Hotel</option>
                <option>Guest House</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
