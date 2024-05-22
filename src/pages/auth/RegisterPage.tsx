import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Form, Formik } from "formik";
import { AUTH } from "../../api/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { registerAuthentication } = AUTH.registerAuth();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
            <MdLockOutline />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={{
              firstname: "Lukas",
              lastname: "Thern Loven",
              email: "lukas@thernloven.com",
              password: "securePassword123!",
              address: "1213 Benicia Street",
              country: "USA",
              state: "California",
              city: "Los Angeles",
              zip: "90001",
            }}
            onSubmit={async (values) => {
              console.log(values, "values");
              await registerAuthentication({ bodyData: { ...values } })
                .then((values) => {
                  console.log(values, "values");
                  Swal.fire(
                    "Success",
                    "Account successfully created and check your email to verify your account",
                    "success"
                  );
                })
                .catch((error) => {
                  Swal.fire(
                    "Warning",
                    error?.response?.data?.message,
                    "warning"
                  );
                });
            }}
          >
            {({ getFieldProps }) => (
              <Form>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="firstname"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        autoFocus
                        {...getFieldProps("firstname")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        autoComplete="family-name"
                        {...getFieldProps("lastname")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        {...getFieldProps("email")}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <OutlinedInput
                        // margin="normal"
                        required
                        fullWidth
                        placeholder="Password"
                        // label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <MdVisibilityOff />
                              ) : (
                                <MdVisibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        autoComplete="current-password"
                        {...getFieldProps("password")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Address"
                        id="address"
                        {...getFieldProps("address")}
                        autoComplete="address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Country"
                        id="country"
                        {...getFieldProps("country")}
                        autoComplete="country"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="State"
                        id="state"
                        {...getFieldProps("state")}
                        autoComplete="state"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="City"
                        id="city"
                        {...getFieldProps("city")}
                        autoComplete="city"
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Zip"
                        id="zip"
                        {...getFieldProps("zip")}
                        autoComplete="zip"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/auth/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
