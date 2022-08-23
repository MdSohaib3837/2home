import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import first from "../../assets/images/detailpage/fondmaison.png";
import Badge from "../detail-page/Badge";
import LikeSaveBtns from "../detail-page/LikeSaveBtns";
import "./detailPage.scss";
import location from "../../assets/icons/location.svg";
import bed from "../../assets/icons/bed.svg";
import water from "../../assets/icons/water.svg";
import terrain from "../../assets/icons/terrain.svg";
import terrain2 from "../../assets/icons/terrain_2.svg";

export default function SecondSection() {
  return (
    <>
      <div class="grid lg:col-12 md:lg:col-12 xs:lg:col-12 px-12 pt-8 sm:gap-4">
        <div class="grid lg:col-start-1 lg:col-span-7 md:col-start-1 md:col-span-7 sm:col-start-1 sm:col-span-7 xs:col-start-1 xs:col-span-7 gap-4">
          <Card className="radius px-4">
            <CardContent>
              <p className="font-[Poppins] font-bold lg:text-4xl md:text-[20px]  text-left">
                Paradise Hotel for Rent
              </p>
              <p className="font-[Poppins] textcolor text-right md:text-[20px] font-bold lg:text-4xl lg:-mt-10 md:-mt-7 ">
                1500 PKR
              </p>
            </CardContent>
            <CardContent className="lg:!p-4 md:!p-0">
              <div className="flex items-center space-x-4">
                <span className="lg:pt-1.5 md:py-4 lg:pb-4 lg:px-3 md:px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                  <img src={location} className="h-6" />
                  <span className="hidden sm:block ml-2.5">
                    Mall Road Kalam SWAT
                  </span>
                </span>
              </div>
              <hr></hr>
            </CardContent>
            <CardContent>
              <div className="flex items-center xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center space-x-3 ">
                  <img src={bed} className="h-6" />
                  <span>
                    6{" "}
                    <span className="lg:contents md:hidden sm:hidden xs:hidden sm:inline-block">
                      bedrooms
                    </span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={water} className="h-6" />
                  <span>
                    4{" "}
                    <span className="lg:contents md:hidden sm:hidden xs:hidden sm:inline-block">
                      bathrooms
                    </span>
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <img src={terrain} className="h-6" />
                  <span>
                    850m²{" "}
                    <span className="lg:contents md:hidden sm:hidden xs:hidden sm:inline-block">
                      Sitting Area
                    </span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div class="grid lg:col-12 md:lg:col-12 xs:lg:col-12 px-12 pt-8">
        <div class="grid ">
          <Card className="radius pl-4">
            <CardContent>
              <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
                <div className="listingSection__wrap">
                  <h2 className="text-2xl lg:text-[26px] font-[Poppins] font-semibold">
                    Description
                  </h2>
                  <div className="w-14 border-b-2 color"></div>
                  <div className="text-neutral-6000 dark:text-neutral-300 lg:text-[16px]">
                    <span>
                      Located in a residential area between Wezembeek/Stockel
                      and close to public transport, schools, supermarkets,
                      major roads...
                    </span>
                    <br />
                    <br />
                    <p className="text-2xl lg:text-[16px] font-[Poppins] text-[#9E9E9E] text-center">
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
