import React from "react";
import first from "../../assets/images/detailpage/fondmaison.png";
import second from "../../assets/images/detailpage/fondinscrir.png";
import third from "../../assets/images/detailpage/rect3.png";

const PHOTOS = [
  `${first}`,
  `${second}`,
  `${third}`,
  `${second}`,
  `${third}`,
  "https://images.pexels.com/photos/2827753/pexels-photo-2827753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/257851/pexels-photo-257851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/189454/pexels-photo-189454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/193995/pexels-photo-193995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

export default function FirstSection() {
  return (
    <>
      <div class="grid lg:col-12 md:lg:col-12 xs:lg:col-12 px-12 pt-8 sm:gap-4 mt-16">
        <div class="grid grid-cols-4 sm:gap-4 h-96">
          <div className="col-span-2 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
            <img
              className="object-cover w-full h-full rounded-md sm:rounded-xl"
              src={PHOTOS[0]}
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 2 ? "block" : ""
              }`}
            >
              <img
                className="object-cover w-full h-full rounded-md sm:rounded-xl "
                src={item || ""}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
