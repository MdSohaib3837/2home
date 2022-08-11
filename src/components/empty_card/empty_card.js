import { Container, Grid } from "@mui/material";
import React from "react";

const EmptyCard = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <h1 className=" text-[14px] font-bold font-[OpenSans] text-[#9E9E9E] my-32">
          We found no results for this search.
        </h1>
      </Grid>
    </Container>
  );
};

export default EmptyCard;
