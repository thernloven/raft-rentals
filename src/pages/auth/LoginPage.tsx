import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdLockOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { AUTH } from "../../api/auth";
import { Form, Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setRole, setUser } from "../../store/slice/userSlice";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {
  const { loginAuthentication, loginAuthLoading } = AUTH.loginAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <MdLockOutline />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={{
                email: "test@thernloven.com",
                password: "securePassword123!",
              }}
              onSubmit={async (values) => {
                console.log(values, "values");
                await loginAuthentication({ bodyData: { ...values } })
                  .then((values) => {
                    console.log(values, "login values");
                    dispatch(setUser(values?.user?.user_id));
                    dispatch(setRole(values?.user?.user_role));
                    localStorage.setItem("authToken", values.token);
                    Swal.fire("Success", "Login was successful!", "success");
                    navigate("/find-photos");
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
                  <Box sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      autoComplete="email"
                      autoFocus
                      {...getFieldProps("email")}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      {...getFieldProps("password")}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <LoadingButton
                      loading={loginAuthLoading}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </LoadingButton>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/auth/register" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
