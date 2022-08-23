import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";
import { Paper } from "@mui/material";
import { firestore, signIn } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

export default function SignInSide() {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passNameRef = useRef();
  const firebaseRef = collection(firestore, "users");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: userNameRef.current.value,
      password: passNameRef.current.value,
    };
    try {
      await signIn({ data });
      // addDoc(firebaseRef, data);
      navigate("/home");
    } catch (error) {}
  };

  return (
    <Grid container component="main" sx={{ height: "80vh", marginTop: "80px" }}>
      <CssBaseline />

      <Grid
        className="m-auto !mt-20 w-2/4"
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
                className="USerNameField"
                data-validate="Username is required"
              >
                <span className="UF-Label font-[OpenSans]">Username</span>
                <input
                  className="Uinput font-[OpenSans]"
                  type="text"
                  name="username"
                  ref={userNameRef}
                  placeholder="Type your username"
                />
                <span className="UF_icon">
                  <FontAwesomeIcon icon={faUser} className="UF_icon" />
                </span>
              </div>
            </Grid>
            <Grid
              className="USerNameField validate-input"
              data-validate="Password is required"
            >
              <span className="UF-Label font-[OpenSans]">Password</span>
              <input
                className="Uinput font-[OpenSans]"
                type="password"
                name="pass"
                ref={passNameRef}
                placeholder="Type your password"
              />
              <span class="UF_icon">
                <FontAwesomeIcon icon={faLock} className="UF_icon" />
              </span>
            </Grid>
            <div className="txt_Forget font-[OpenSans] text-right pt-4 pb-30">
              <a href="#">Forgot password?</a>
            </div>
            <Grid className="container-button">
              <Grid className="WrapButton">
                <Grid className="BgButton"></Grid>
                <Button
                  className="loginButton font-[OpenSans]"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid className="SignUptxt justify-center pt-5">
                <span> Using</span>
              </Grid>
              <Grid container className="justify-center">
                <Grid style={{ display: "-webkit-inline-box" }}>
                  <a
                    href="https://twitter.com/home"
                    className="social-item bg1"
                  >
                    <ul className="fa-Social">
                      <FontAwesomeIcon icon={FaFacebookSquare} />
                    </ul>
                  </a>

                  <a
                    href="https://twitter.com/i/flow/login"
                    className="social-item bg2"
                  >
                    <ul className="fa-Social">
                      <FontAwesomeIcon icon={FaTwitter} />
                    </ul>
                  </a>

                  <a href="#" className="social-item bg3">
                    <ul className="fa-Social">
                      <FontAwesomeIcon icon={FaGoogle} />
                    </ul>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="Account !pt-4 !text-right">
              <a href="/SignUp">
                <label>Don't have a acoount? Sign Up</label>
              </a>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
