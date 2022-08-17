import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollToTopWrapper from "../config/scrollToTop";
import HomePage from "./home_page/home_page";
import Header from "./header/header";
import Footer from "./footer/footer";
import Contact from "./contact/contact";
import CookiesPage from "./cookies_page/cookies_page";
import CookieBanner from "../components/cookies_banner/cookie_banner";
import ResultPage from "./result_page/result_page";
import DetailPage from "./detailPage/detailPage";
import Login from "../pages/login/login";
import "./core.scss";
import SignUp from "./SignUp/SignUp";
import BiddingForm from "../components/FormHeader/BiddingForm";
import Hotel_DetailForm from "../HotelSide/Hotel_components/Hotel-DetailForm/Hotel_DetailForm";
import Dashboard from "../HotelSide/Hotel_components/DashBoard/Dashboard";
import Calendar from "../HotelSide/Hotel_components/Calendar/calendar";
import Bookings from "../HotelSide/Hotel_components/BookingList/Bookings";
import Payments from "../HotelSide/Hotel_components/Payment/payment";
import Room from "../HotelSide/Hotel_components/Room/Room";
import Room_detail from "../HotelSide/Hotel_components/Room/Room_detail";

const ComponentWrapper = (props) => {
  const { disableHeader, disableFooter, alternateFooter } = props;
  return (
    <>
      {!disableHeader && <Header />}
      {props.children}
      <CookieBanner />
      {!disableFooter && <Footer hasFields={alternateFooter} />}
    </>
  );
};

export default function Core() {
  return (
    <Router>
      <ScrollToTopWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <ComponentWrapper disableHeader alternateFooter>
                <HomePage />
              </ComponentWrapper>
            }
          />
          <>
            <Route
              path="/home"
              element={
                <ComponentWrapper disableHeader alternateFooter>
                  <HomePage />
                </ComponentWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <ComponentWrapper>
                  <Contact />
                </ComponentWrapper>
              }
            />
            <Route
              path="/result"
              element={
                <ComponentWrapper>
                  <ResultPage />
                </ComponentWrapper>
              }
            />
            <Route
              path="/detail-page"
              element={
                <ComponentWrapper>
                  <DetailPage />
                </ComponentWrapper>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/privacy-page"
              element={
                <ComponentWrapper>
                  <CookiesPage />
                </ComponentWrapper>
              }
            />
            <Route
              path="/SignUp"
              element={
                <ComponentWrapper>
                  <SignUp />
                </ComponentWrapper>
              }
            />
            <Route
              path="/BiddingForm"
              element={
                <ComponentWrapper>
                  <BiddingForm />
                </ComponentWrapper>
              }
            />
            <Route path="/hotel" element={<Dashboard />} />
            <Route path="/Hotel_DetailForm" element={<Hotel_DetailForm />} />
            <Route path="/Calender" element={<Calendar />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/Room" element={<Room />} />
            <Route path="/Room_detail" element={<Room_detail />} />
          </>
        </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
}

ComponentWrapper.propTypes = {
  disableHeader: PropTypes.bool,
  disableFooter: PropTypes.bool,
  alternateFooter: PropTypes.bool,
};

ComponentWrapper.defaultProps = {
  disableHeader: false,
  disableFooter: false,
  alternateFooter: false,
};
