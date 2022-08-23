import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logos/full_white.svg";

import React from "react";
import { useState } from "react";
import { SiderbarData } from "./SidebarData";
import "./Navbar.scss";
import { IconContext } from "react-icons";
import { Grid } from "@mui/material";
// import Appbar from "../navbar/appbar";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div class="grid grid-cols-12">
        <div class="col-span-2">
          <IconContext.Provider value={{ color: "#fff" }}>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items">
                <li className="navbar-toggle mb-12">
                  <Grid container>
                    <img
                      src={Logo}
                      alt="logo"
                      className="logo_sidebar h-[100px] object-contain"
                    />
                  </Grid>
                </li>
                {SiderbarData.map((item, index) => {
                  return (
                    <div className="NavOptions">
                      <li key={index} className={item.cName}>
                        <Link className="" to={item.path}>
                          {item.icon}
                          <span className="navTitle">{item.title}</span>
                        </Link>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
        <div class="col-span-10 w-full"></div>
      </div>
    </>
  );
};

export default Navbar;
