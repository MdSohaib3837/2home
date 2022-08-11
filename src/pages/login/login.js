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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.scss";
import { TextField } from "@mui/material";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://secondHome.pk/">
        SecondHome.pk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [hotel, setHotel] = React.useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
            <Avatar sx={{ m: 1, bgcolor: "#003030" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid>
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Username</span>
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Type your username"
                  />
                  <span className="focus-input100">
                    <FontAwesomeIcon icon={faUser} className="focus-input100" />
                  </span>
                </div>
              </Grid>
              <Grid
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                />
                <span class="focus-input100">
                  <FontAwesomeIcon icon={faLock} className="focus-input100" />
                </span>
              </Grid>
              <div className="link_forget text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>

              <Grid className="container-login100-form-btn">
                <Grid className="wrap-login100-form-btn">
                  <Grid className="login100-form-bgbtn"></Grid>
                  <Button
                    className="login100-form-btn"
                    onClick={() => {
                      if (hotel) navigate("/hotel");
                      else navigate("/home");
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid className="txt1 justify-center py-5">
                  <span>Or Sign Up Using</span>
                </Grid>

                <Grid container className="justify-center">
                  <Grid style={{ display: "-webkit-inline-box" }}>
                    <a href="#" className="login100-social-item bg1">
                      <ul className="fa fa-facebook"></ul>
                    </a>

                    <a href="#" className="login100-social-item bg2">
                      <ul className="fa fa-twitter"></ul>
                    </a>

                    <a href="#" className="login100-social-item bg3">
                      <ul className="fa fa-google"></ul>
                    </a>
                  </Grid>
                </Grid>

                <Grid className="pt-10 !mx-auto" justifyContent="center">
                  <a href="/SignUp" class="txt2 py-5">
                    Sign Up
                  </a>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
