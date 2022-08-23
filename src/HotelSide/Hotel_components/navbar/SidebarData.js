import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

export const SiderbarData = [
  {
    title: "Hotel_Detail",
    path: "/Hotel_DetailForm",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <FaIcons.FaRegWindowMaximize />,
    cName: "nav-text",
  },
  {
    title: "Calender",
    path: "/Calender",
    icon: <AiIcons.AiFillCalendar />,
    cName: "nav-text",
  },
  {
    title: "Bookings",
    path: "/Bookings",
    icon: <HiIcons.HiUserGroup />,
    cName: "nav-text",
  },
  {
    title: "Payments",
    path: "/Payments",
    icon: <AiIcons.AiFillDollarCircle />,
    cName: "nav-text",
  },

  {
    title: "Room",
    path: "/Room",
    icon: <MdIcons.MdBedroomParent />,
    cName: "nav-text",
  },
];
