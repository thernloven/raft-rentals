import { Box, Card, Grid, Typography } from "@mui/material";
import { Input } from "antd";
import { AUTH } from "../api/auth";
import { Form, Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";

function ProfileSettings() {
  const { userProfileAuthData, userProfileAuthRefetch } =
    AUTH.userProfileAuth();

  const { userProfileAuthMutateAsync, userProfileUpdateLoading } =
    AUTH.userProfileUpdateAuth();

  console.log(userProfileAuthData?.data?.user, userProfileUpdateLoading);
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          padding: 3,
        }}
      >
        <Typography
          variant="h4"
          fontSize={22}
          marginBottom={2}
          fontWeight={600}
        >
          Basic Info
        </Typography>
        <Formik
          onSubmit={async (values) => {
            userProfileAuthMutateAsync({ bodyData: { ...values } })
              .then(() => {
                userProfileAuthRefetch();
                Swal.fire("Profile", "Profile has been updated", "success");
              })
              .catch(() => {
                Swal.fire("Warning", "Something Went Wrong.", "warning");
              });
          }}
          enableReinitialize
          initialValues={userProfileAuthData?.data?.user}
        >
          {({ getFieldProps }) => (
            <Form>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      {...getFieldProps("firstname")}
                      label="First name"
                      placeholder="Michael"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      {...getFieldProps("lastname")}
                      label="Last name"
                      placeholder="Jackson"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputField
                      {...getFieldProps("address")}
                      label="Address"
                      placeholder="Eg:India"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      {...getFieldProps("country")}
                      label="Country"
                      placeholder="Eg:India"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      {...getFieldProps("state")}
                      label="Your State"
                      placeholder="Sydney, A"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputField
                      {...getFieldProps("city")}
                      label="City"
                      placeholder="Eg:India"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputField
                      label="Zip Code"
                      placeholder="123123"
                      {...getFieldProps("zip")}
                      inputProps={{ type: "number" }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputField
                      label="Email"
                      {...getFieldProps("email")}
                      placeholder="example@email.com"
                      inputProps={{ type: "email" }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputField
                      {...getFieldProps("password")}
                      label="New Password"
                      placeholder="Enter password"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      {/* <VuiTagInput
                  tags={skills}
                  placeholder=" "
                  onChange={(newSkill) => setSkills(newSkill)}
                  removeOnBackspace
                /> */}
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Box
                    component={LoadingButton}
                    type="submit"
                    loading={userProfileUpdateLoading}
                    sx={{
                      borderRadius: 2,
                      padding: 1,
                      marginTop: 1,
                      width: 250,
                      border: 0,
                      background:
                        "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
                      cursor: "pointer",
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    Update Profile
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

export const InputField = ({ label, placeholder, ...rest }: any) => {
  return (
    <Box>
      <Typography
        fontWeight="600"
        variant="h5"
        sx={{
          mb: 1,
          color: "#2D3748",
        }}
      >
        {label}
      </Typography>
      <Input {...rest} placeholder={placeholder} />
    </Box>
  );
};

export default ProfileSettings;
