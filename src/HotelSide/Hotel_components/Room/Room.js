import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../pages/header/header";
import Navbar from "../navbar/Navbar";

const Room = () => {
  const navigate = useNavigate();
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
          <div className="flex flex-row mt-8">
            <h1 className="w-full font-[OpenSans] text-3xl text-black justify-center">
              Room
            </h1>
            <div>
              <Button
                variant="contained"
                className="!bg-[#003030] text-white !mr-16 w-full"
                onClick={() => {
                  navigate("/Room_detail");
                }}
              >
                +Add Room Type
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
