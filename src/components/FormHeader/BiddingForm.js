import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import "./BiddingForm.scss";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugSaucer,
  faParking,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

const theme = createTheme();

export default function BiddingForm() {
  const [wifi, setWifi] = React.useState();
  const [parking, setParking] = React.useState();
  const [breakfast, setBreakfast] = React.useState();
  const [lunch, setLunch] = React.useState();
  const [dinner, setDinner] = React.useState();

  console.log("wifi", wifi);
  console.log("parking", parking);
  console.log("breakfast", breakfast);
  console.log("lunch", lunch);
  console.log("dinner", dinner);
  const [values, setValues] = React.useState({
    amount: 0,
  });

  const handleValueChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "60vh" }}>
        <CssBaseline />

        <Grid
          className="m-auto w-2/4"
          Griditem
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography className="Heading1 font-[OpenSans]" component="h1">
              Services
            </Typography>
            <Grid className="flex flex-row place-items-center !justify-between">
              <div>
                <span className="service">
                  <FontAwesomeIcon icon={faWifi} className="Icon" />
                  Wifi
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="wifi"
                        onChange={() => setWifi(!wifi)}
                        color="primary"
                      />
                    }
                  />
                </span>
              </div>

              <span className="service">
                <FontAwesomeIcon icon={faParking} className="Icon" />
                Parking
                <FormControlLabel
                  control={
                    <Checkbox
                      value="parking"
                      onChange={() => setParking(!parking)}
                      color="primary"
                    />
                  }
                />
              </span>
              <span className="service">
                <FontAwesomeIcon icon={faMugSaucer} className="Icon" />
                BreakFast
                <FormControlLabel
                  control={
                    <Checkbox
                      value="breakfast"
                      onChange={() => setBreakfast(!breakfast)}
                      color="primary"
                    />
                  }
                />
              </span>
              <span className="service">
                <FontAwesomeIcon icon={faUtensils} className="Icon" />
                Lunch
                <FormControlLabel
                  control={
                    <Checkbox
                      value="lunch"
                      onChange={() => setLunch(!lunch)}
                      color="primary"
                    />
                  }
                />
              </span>
              <span className="service">
                <FontAwesomeIcon icon={faUtensils} className="Icon" />
                Dinner
                <FormControlLabel
                  control={
                    <Checkbox
                      value="dinner"
                      onChange={() => setDinner(!dinner)}
                      color="primary"
                    />
                  }
                />
              </span>
            </Grid>

            <Grid>
              <Typography className="Heading1 font-[OpenSans]" component="h1">
                Offer Your Fare
              </Typography>
              <Grid className="PriceTags">
                <FormControl sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">
                    Amount
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    type="number"
                    value={values.amount > 0 ? values.amount : 0}
                    onChange={handleValueChange("amount")}
                    label="Amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>

                <Button
                  variant="contained"
                  size="medium"
                  className="FormButton bg-#003030 text-white"
                >
                  Apply Bid
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
