import * as React from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthorisationContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        cleartrip
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn({
  openSnackBar,
  updateSnackBarMessage,
  handleClose,
}) {
  const authContextStore = useAuthContext();
  const { updateShowSignUp, setIsLoggedIn } = authContextStore;
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    const signinData = {
      email,
      password,
      appType: "bookingportals",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: "{{9harpb4zkaur}}",
          },
          body: JSON.stringify(signinData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage("Login successful!");
        console.log("Success:", data);
        console.log(
          data.data.user.name,
          data.data.user.email,
          data.data.user._id
        );
        const obj = {
          id: data.token,
          token: data.token,
          name: data.data.user.name,
          email: data.data.user.email,
        };
        localStorage.setItem("userdetails", JSON.stringify(obj));

        updateSnackBarMessage("Succesfully LoggedIn");
        setIsLoggedIn(true);
        openSnackBar();
        handleClose();
        // navigate(redirect);
      } else {
        setMessage("This account already exist, Please Login");
        console.error("Error:", response.statusText);
        updateSnackBarMessage("This account already exist, Please Login");
        openSnackBar();
        handleClose();
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Log in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSignup}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"></Link>
              </Grid>
              <Grid item>
                {/* <NavLink
									to={`/signup?redirect=${redirect}`}
									variant="body2"
								>
									{"Don't have an account? Sign Up"}
								</NavLink> */}
                <p
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    padding: "10px 5px",
                  }}
                  onClick={() => updateShowSignUp(true)}
                >
                  Don't have an account? Sign Up
                </p>
                {/* <p
                  onClick={() => {
                    updateSnackBarMessage("Succesfully LoggedIn");
                    openSnackBar();
                    handleClose();
                  }}
                >
                  show snackbar successful
                </p>
                <p
                  onClick={() => {
                    updateSnackBarMessage(
                      "This account already exist, Please Login"
                    );
                    openSnackBar();
                    handleClose();
                  }}
                >
                  show snackbar error
                </p> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
