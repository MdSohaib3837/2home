import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./detailPage.scss";
import React from "react";

export default function FifthSection() {
  return (
    <>
      <div class="grid lg:col-12 md:col-12 sm:col-12 xs:col-12 px-12 pt-8 lg:gap-4 md:gap-4 sm:gap-0 xs:gap-0">
        <div class="grid lg:col-start-1 lg:col-span-6 md:col-start-1 md:col-span-10 lg:mt-4">
          <Card className=" shadow radius h-fit pl-4">
            <CardContent>
              <p className="font-[Poppins] font-semibold text-4xl   text-left">
                Garages / Parking
              </p>
              <div className="w-14 border-b-2 color"></div>
            </CardContent>
            <CardContent>
              <div className="mx-8">
                <p className="font-[Poppins] my-1 font-semibold text-left">
                  Number of parking
                </p>
                <p className="font-[Poppins] text-right text-base -mt-6 float-right">
                  1
                </p>
                <hr></hr>
                <p className="font-[Poppins] my-1 font-semibold text-left">
                  Number of garage
                </p>
                <p className="font-[Poppins] my-1 text-right -mt-6 ">2</p>
                <hr></hr>
                <p className="font-[Poppins] my-1 font-semibold text-left">
                  Parking interior
                </p>
                <p className="font-[Poppins] my-1 text-right -mt-6 ">3</p>
                <hr></hr>
                <p className="font-[Poppins] my-1 font-semibold text-left">
                  Parking exterior
                </p>
                <p className="font-[Poppins] my-1 text-right -mt-6 ">2</p>
                <hr></hr>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
