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

export default function SignIn({ accountType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSigninClick = () => {
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost/api/admins/signinAdmin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        //localStorage.clear("token")
        accountType("admin");
        navigate("/home/account");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ backgroundColor: "#D3D3D3", padding: 20, paddingTop: 0 }}>
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
              Sign in Admin
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                color="secondary"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                color="secondary"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSigninClick}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"you're not a admin? Sign Up as a user"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
