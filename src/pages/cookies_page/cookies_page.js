/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, Container } from "@mui/material";
import TableComponent from "../../components/table/table";
import Mail from "../../assets/icons/mail.svg";

const CookiesPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        justifyContent="center"
        className="bg-[#F1F4F6] py-[40px]"
      >
        <h1 className="font-[Poppins] text-[30px] xs:text-[40px] lg:text-[40px] text-center">
          <span className="text-[#222222] font-bold">Policy of </span>
          <span className="text-[#222222]">Cookies</span>
        </h1>
      </Grid>
      <Container>
        <Grid container justifyContent="center" className="py-[40px]">
          <Grid container xs={12} lg={10} sm={12}>
            <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] ">
              Object
            </h1>
            <div className="text-[#666666] text-[14px] font-[OpenSans]">
              <p className="pt-[10px]">
                This Policy is established SecondHome hotel rental service,
                publisher of the website https://secondhome.pk (here in after
                the “website”), whose registered office is located
                <span className="text-[#FF3737]">ADDRESS</span>under the number
                business
                <span className="text-[#FF3737]"> H10-Islamic-University </span>
                (« SecondHome Rental Service »).
              </p>
              <p className="pt-[10px]">
                SecondHome rental service to offer you the best possible
                service. We therefore wish to preserve the confidence that you
                place in us by informing you of our policy of use and storage of
                cookies from our website to your terminal (computer, smartphone,
                tablet tactile, interactive television, etc.)
              </p>
            </div>
            <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
              What is a cookie ?
            </h1>
            <div className="text-[#666666] text-[14px] font-[OpenSans]">
              <p className="pt-[10px]">
                A cookie is a small text file that contains fragments
                information. When you visit websites, the information collected
                by different cookies is kept on your terminal (example: the
                choice of your language of preference for a website). When you
                visit these websites, they will search your terminal for the
                information they have recorded there (example: configuration of
                the website in relation to your preferred language).
              </p>
              <p className="pt-[10px]">
                A distinction should be made between two types of cookies. On
                the one hand, the«{" "}
                <span className="text-[#222222] font-bold">
                  {" "}
                  original cookies{" "}
                </span>{" "}
                » which are set up by ourselves. On the other hand, the «{" "}
                <span className="text-[#222222] font-bold">
                  {" "}
                  third-party cookies{" "}
                </span>{" "}
                » which are set up by companies other than us (example :
                third-party cookies are often used by companies in the
                advertising sector to target your preferences and send you
                advertisements that may be of interest to you).
              </p>
              <p className="pt-[10px]">
                Cookies generally have an expiration date. Some cookies expire
                when you close your browser (which are called the«{" "}
                <span className="text-[#222222] font-bold">
                  {" "}
                  session cookies{" "}
                </span>{" "}
                »),while others stay longer on your terminal, sometimes even
                until you delete them manually (so-called«{" "}
                <span className="text-[#222222] font-bold">
                  {" "}
                  permanent cookies{" "}
                </span>{" "}
                »).
              </p>
            </div>
            <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
              Cookie management
            </h1>
            <div className="text-[#666666] text-[14px] font-[OpenSans]">
              <p className="pt-[10px]">
                Some cookies require your prior consent and explicit. The banner
                placed on the home page of the website allows you to express
                your consent to our “Policy in regarding cookies”. It also
                refers to our "Table settings relating to cookies", which allows
                you to configure the placement, or not, of cookies on your
                terminal.
              </p>
              <p className="pt-[10px]">
                You can, at any time, access our "Table of settings relating to
                cookies", by clicking on the link hypertext located at the
                bottom of all pages of our website, and change or withdraw your
                consent.
              </p>
              <p className="pt-[10px]">
                In addition, most browsers use cookies. You can also delete
                these cookies or refuse their installation at any time and free
                of charge by modifying the options of your browser software. The
                configuration of every browser is different. Each procedure is
                described in your browser's help menu. For it, please visit the
                following links:
              </p>
              <ul className="pt-[10px] pl-[20px] break-all">
                <li>
                  Firefox:
                  <a
                    href="https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information"
                    className="text-[#222222] underline ml-[3px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information
                  </a>
                </li>
                <li>
                  Chrome:
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=fr"
                    className="text-[#222222] underline ml-[3px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://support.google.com/chrome/answer/95647?hl=fr
                  </a>
                </li>
                <li>
                  Safari:
                  <a
                    href="https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information"
                    className="text-[#222222] underline ml-[3px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information
                  </a>
                </li>
                <li>
                  Internet Explorer:
                  <a
                    href="https://support.microsoft.com/fr-be/help/17442/windows-internet-explorer-delete-manage-cookies"
                    className="text-[#222222] underline ml-[3px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://support.microsoft.com/fr-be/help/17442/windows-internet-explorer-delete-manage-cookies
                  </a>
                </li>
              </ul>
              <p className="pt-[10px]">
                By refusing the use of cookies, you can access our website.
                However, some features will be limited or even impossible.
              </p>
            </div>
            <Grid container>
              <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
                Types of cookies, purposes, expiry dates and obligation whether
                or not to obtain consent
              </h1>
              <Grid container className="mt-[10px]">
                <TableComponent />
              </Grid>
            </Grid>
            <Grid container>
              <div>
                <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
                  Your rights to the processing of your personal data personal
                </h1>
              </div>
              <div>
                <p className="text-[#666666] pt-[10px] text-[14px] font-[OpenSans]">
                  Some cookies collect personal data. In this context, you have
                  certain rights (right of access, a right of rectification, a
                  right of opposition, a right to withdraw consent, etc.). We
                  send you back to our Privacy Policy which takes up these
                  points with precision.
                </p>
              </div>
            </Grid>
            <div>
              <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
                Contact us
              </h1>
              <div>
                <p className="text-[#666666] pt-[10px] text-[14px] font-[OpenSans]">
                  Applicable Law and Jursdiction
                </p>
              </div>
              <div className="pt-[30px]">
                <div className="flex items-center">
                  <div>
                    <img className="h-[26px]" src={Mail} alt="" />
                  </div>
                  <p className="pl-[20px]  text-[14px] font-[OpenSans] text-[#222222]">
                    secondhome@pk.com
                  </p>
                </div>
              </div>
              <div className="pt-[10px]">
                <div className="flex items-center">
                  <div>
                    <img className="h-[26px]" src={Mail} alt="" />
                  </div>
                  <p className="pl-[20px]  text-[14px] font-[OpenSans] text-[#222222]">
                    http://riccirealestate.be
                  </p>
                </div>
              </div>
              <div className="pt-[10px]">
                <div className="flex items-center">
                  <div>
                    <img className="h-[26px]" src={Mail} alt="" />
                  </div>
                  <p className="pl-[20px]  text-[14px] font-[OpenSans] text-[#FF3737]">
                    ADDRESS
                  </p>
                </div>
              </div>
            </div>
            <Grid container>
              <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
                Amendment
              </h1>
              <div>
                <p className="text-[#666666] pt-[10px] text-[14px] font-[OpenSans]">
                  We reserve the right to modify at any time the provisions of
                  this Policy. We will publish the changes directly on our
                  website.
                </p>
              </div>
            </Grid>
            <Grid container>
              <h1 className="font-[Poppins] font-semibold text-[18px] lg:text-[26px] xs:text-[26px] pt-[30px]">
                Applicable Law and Jursdiction
              </h1>
              <div className="text-[#666666] text-[14px] font-[OpenSans]">
                <p className="pt-[10px]">
                  This Policy is governed by Pakistan law.
                </p>
                <p className="pt-[10px]">
                  Any dispute relating to the interpretation or execution of the
                  this Policy will be subject to Belgian law and will be subject
                  to the exclusive jurisdiction of the French-speaking courts of
                  the judicial district of Brussels.
                </p>
                <p className="pt-[10px]">
                  This version of the Policy is effective and has been updated
                  as of (DATE).
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default CookiesPage;
