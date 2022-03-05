import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate, useHistory, Link } from "react-router-dom";
import axios from "axios";

const theme = createTheme();

export default function SignUpTranslator() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [degree, setDegree] = useState("");
  const [isFetchingSignup, setIsFetchingSignup] = useState(false);

  const [error, setError] = useState({
    errorFound: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleSignupClick = () => {
    // fetching ...
    var data = JSON.stringify({
      username,
      email,
      password1,
      password2,
      degree,
    });

    var config = {
      method: "post",
      url: "http://localhost/api/users/signuptranslator",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    setIsFetchingSignup(true);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/dashboard");
        setIsFetchingSignup(false);
      })
      .catch(function (error) {
        console.log({ error });
        setError({
          errorFound: true,
          message: error.response.data.error,
        });
        setIsFetchingSignup(false);
      });
  };

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up translator
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  autoFocus
                  val
                  defaultValue="Hello World"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  required
                  fullWidth
                  name="degree"
                  label="Mention degree"
                  type="text"
                  id="degree"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>

              <Grid item xs={12}>
                {error.errorFound ? (
                  <p style={{ color: "red" }}> {error.message} </p>
                ) : null}
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignupClick}
              disabled={isFetchingSignup}
            >
              {isFetchingSignup ? "Loading.." : "Sign Up"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
