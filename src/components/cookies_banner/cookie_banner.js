import React, { useState, useEffect } from "react";
import { Grid, Modal, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import SelectionBanner from "./cookie_selection_banner/cookie_selection_banner";
import "./cookie_banner.scss";

export default function CookiePolicy() {
  const cookies = new Cookies();
  const cookie = cookies.get("rcci-frontend");
  const [show, setShow] = useState();
  useEffect(() => {
    if (cookie !== "all") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [cookie]);
  const handleAccept = () => {
    cookies.set("rcci-frontend", "all", {
      maxAge: 1000000 * 10,
      path: "/",
      sameSite: "none",
      secure: true,
    });
  };
  const [bannerTwo, setBannerTwo] = useState(false);
  return (
    <Container>
      {show && (
        <div
          className="modal fade fixed h-0 top-0 left-0 w-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalLg"
          // tabindex="-1"
          aria-labelledby="exampleModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg fixed bottom-0 right-[0px] md:right-[20px] xl:right-[40px] lg:right-[40px] md:w-4/5 xl:w-3/5 lg:w-8/12 w-full">
            <Grid
              container
              justifyContent="space-between"
              className="p-[20px] modal-content border-none box-shadow-cookies-banner relative flex w-full rounded-t-[17px] bg-white "
            >
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <div>
                  <h1
                    className="font-[OpenSans] text-[16px]  font-bold"
                    id="exampleModalLgLabel"
                  >
                    This website uses cookies
                  </h1>
                  <p className="font-[OpenSans] text-[14px] pt-[8px] text-[#222222]">
                  We use cookies to offer you the best
                     experience on our site. You can turn them off or
                     find out more in the settings.
                  </p>
                  <Link
                    className="font-[OpenSans] text-[14px] text-[#C7A187] cursor-pointer"
                    to="/privacy-page"
                  >
                    Learn more
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="my-[10px] text-center ">
                  <button
                    class="w-11/12 font-[OpenSans] text-[14px] font-bold bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]"
                    onClick={() => {
                      handleAccept();
                      setShow(false);
                    }}
                  >
                    Accept all cookies
                  </button>
                </div>
                <div className=" text-center">
                  <button
                    class="w-11/12 font-[OpenSans] text-[14px] font-bold bg-white text-[#003030] py-2 px-4 border border-[#DDDDDD] rounded-[5px]"
                    onClick={() => {
                      setShow(false);
                      setBannerTwo(true);
                    }}
                  >
                    Personalize
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
      {bannerTwo && (
        <SelectionBanner
          setBannerTwo={setBannerTwo}
          handleAccept={handleAccept}
        />
      )}
    </Container>
  );
}
