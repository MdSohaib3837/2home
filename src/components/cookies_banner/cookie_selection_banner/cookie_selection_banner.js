import React from "react";
import { Grid, Container } from "@material-ui/core";
import "../cookie_banner.scss";
import "./cookie_selection_banner.scss";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CookiePolicy(props) {
  const { setBannerTwo, handleAccept } = props;
  return (
    <Container className="cookie-selection-main">
      <div
        className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalLg"
        // tabindex="-1"
        aria-labelledby="exampleModalLgLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg fixed bottom-0 right-[0px] md:right-[20px] xl:right-[40px] lg:right-[40px] md:w-5/6 xl:w-3/5 lg:w-4/5 w-full">
          <Grid
            container
            justifyContent="space-between"
            className="p-[20px] modal-content border-none box-shadow-cookies-banner relative flex w-full rounded-t-[17px] bg-white "
          >
            <Grid container>
              <div>
                <h1
                  className="font-[OpenSans] text-[16px]  font-bold"
                  id="exampleModalLgLabel"
                >
                  Ce site utilise des cookies
                </h1>
                <p className="font-[OpenSans] text-[14px]  pt-[8px] text-[#222222]">
                  Nous utilisons des cookies pour personnaliser le contenu,
                  analyser notre trafic et améliorer notre site web et nos
                  services. Veuillez accepter les cookies suivants pour obtenir
                  la meilleure expérience possible.
                </p>
                <Link
                  className="font-[OpenSans] text-[14px]  text-[#C7A187] cursor-pointer"
                  to="/privacy-page"
                >
                  En savoir plus
                </Link>
              </div>
            </Grid>

            <Grid container className="pt-[10px] pl-[10px]">
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <div>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={true}
                          style={{ color: "#003030", padding: "0px 9px" }}
                        />
                      }
                      label="Fonctionnels"
                      className="checkbox-cookies"
                    />
                  </div>
                  <p className="font-[OpenSans] text-[14px]  text-[#222222] ml-[28px]">
                    Requis pour le fonctionnement du site web.
                  </p>
                </div>
                <div className="pt-[10px]">
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          defaultChecked
                          style={{ color: "#003030", padding: "0px 9px" }}
                        />
                      }
                      label="Statistiques"
                      className="checkbox-cookies"
                    />
                  </div>
                  <p className="font-[OpenSans] text-[14px]   text-[#222222] ml-[28px]">
                    Aidez-nous à améliorer ce site web par l’analyse et la
                    recherche.
                  </p>
                </div>
                <div className="pt-[10px]">
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          size="small"
                          style={{ color: "#003030", padding: "0px 9px" }}
                        />
                      }
                      label=" Publicités personnalisées"
                      className="checkbox-cookies"
                    />
                  </div>
                  <p className="font-[OpenSans] text-[14px]  text-[#222222] ml-[28px]">
                    Obtenez des publicités personnalisées en fonction du
                    comportement .
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Grid className="flex justify-end flex-col h-full">
                  <div className="my-[10px] text-center w-full">
                    <button
                      class="w-11/12 font-[OpenSans] text-[14px] font-bold bg-[#003030] text-white py-2 px-4 border border-[#DDDDDD] rounded-[5px]"
                      onClick={() => {
                        handleAccept();
                        setBannerTwo(false);
                      }}
                    >
                      Accepter tous les cookies
                    </button>
                  </div>
                  <div className=" text-center w-full">
                    <button
                      class="w-11/12 font-[OpenSans] text-[14px] font-bold bg-white text-[#003030] py-2 px-4 border border-[#DDDDDD] rounded-[5px]"
                      onClick={() => {
                        handleAccept();
                        setBannerTwo(false);
                      }}
                    >
                      Accepter la selection
                    </button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
