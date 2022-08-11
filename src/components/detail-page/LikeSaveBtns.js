import React from "react";
import virtual from "../../assets/icons/virtual.svg"
import share from "../../assets/icons/share.svg"

const LikeSaveBtns = () => {
  return (
    <div className="flow-root">
      <div className="flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5">
        <span className="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
          <img src={virtual} className="h-6"/>
          <span className="hidden sm:block ml-2.5">Virtual visit</span>
        </span>
        <span className="py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
        <img src={share} className="h-6"/>
          <span className="hidden sm:block ml-2.5">To share</span>
        </span>
      </div>
    </div>
  );
};

export default LikeSaveBtns;
