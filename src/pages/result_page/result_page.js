import React from "react";
import { Grid, Container } from "@mui/material";
import CardComponent from "../../components/card/card";
import CardTwo from "../../components/cardTwo/cardTwo";
import EmptyCard from "../../components/empty_card/empty_card";
import "./result_page.scss";
import { cardData, cardFourData, cardEightData } from "./constant";
import BiddingForm from "../../components/FormHeader/BiddingForm";

const ResultPage = () => {
  return (
    <>
      <Container className="50vh 80vw">
        <BiddingForm />
      </Container>

      <Container className="my-[30px]">
        <Grid container spacing={4}>
          {cardData?.length > 0 ? (
            cardData?.map((single, index) => (
              <>
                {index === 3 && (
                  <Grid
                    item
                    xs={12}
                    lg={4}
                    sm={6}
                    md={4}
                    key={single?.id}
                    className="card-with-logo-background"
                  >
                    <CardTwo data={cardFourData} />
                  </Grid>
                )}
                {index === 7 && (
                  <Grid
                    item
                    xs={12}
                    lg={4}
                    sm={6}
                    md={4}
                    key={single?.id}
                    className="card-with-logo-background"
                  >
                    <CardTwo data={cardEightData} />
                  </Grid>
                )}
                <Grid item xs={12} lg={4} sm={6} md={4} key={single?.id}>
                  <CardComponent data={single} />
                </Grid>
              </>
            ))
          ) : (
            <EmptyCard />
          )}
          {cardData?.length > 0 && (
            <Grid container className="py-[30px]" justifyContent="center">
              <button class="font-[OpenSans] bg-white text-[#003030] text-[14px] font-bold py-2 px-4 border border-[#DDDDDD] rounded">
                See more
              </button>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ResultPage;
