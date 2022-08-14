import React from "react";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";
import "./payment.scss";
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
            <div className="Payment">
              <h1 className="w-full font-[OpenSans] text-3xl text-black justify-center">
                Payments
              </h1>
            </div>
            <div className="flex flex-row !justify-center !items-center gap-12">
              <div class="mb-6 flex flex-row w-1/4  gap-8 !justify-center !items-center">
                <label class="block text-gray-700 text-sm font-bold mb-2 !justify-center !items-center">
                  Commission
                </label>
                <select
                  className="commission appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 justify-center items-cente"
                  id="grid-state"
                >
                  <option value="default" defaultChecked>
                    Payment
                  </option>
                  <option>Paid</option>
                  <option>Cash Payment Due</option>
                </select>
              </div>
              {/* payment processor */}
              <div class="mb-6 flex flex-row w-1/4  gap-8 !justify-center !items-center">
                <label class="block text-gray-700 text-sm font-bold mb-2 !justify-center !items-center">
                  Payment Processor
                </label>
                <select
                  className="commission appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 justify-center items-cente"
                  id="grid-state"
                >
                  <option value="default" defaultChecked>
                    EasyPaisa
                  </option>

                  <option>On Arrival</option>

                  <option>Jazz Cash</option>
                  <option>Master card</option>
                </select>
              </div>
            </div>
            <div className="section-container w-full">
              <div className="w-full bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]">
                Payments
              </div>
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
