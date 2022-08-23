import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
///*Firebase Files//////////////
import { firestore, signUp } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

const theme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const firebaseRef = collection(firestore, "users");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const handleSubmit = (event) => {
    console.log("ddd", firstNameRef.current.value);
    event.preventDefault();
    const data = {
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmpassword: confirmpasswordRef.current.value,
    };
    console.log(data);
    try {
      signUp(data);
      addDoc(firebaseRef, data);
      navigate("/home");
    } catch (error) {}
  };

  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   Confirm_password: "",
  // });

  // let name, value;

  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };
  // console.log("user", user);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#003030" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    // value={user?.firstName}
                    // onChange={handleInputs}
                    autoFocus
                    inputRef={firstNameRef}
                  />
                  <label id="name" className="text-red-800"></label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    // value={user?.lastName}
                    // onChange={handleInputs}
                    autoComplete="family-name"
                    inputRef={lastNameRef}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    // value={user?.email}
                    // onChange={handleInputs}
                    inputRef={emailRef}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    inputRef={passwordRef}
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Confirm_password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    // value={user?.Confirm_password}
                    // onChange={handleInputs}
                    inputRef={confirmpasswordRef}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I accept all terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button
                className=""
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#003030 !important" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
