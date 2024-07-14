import { Box, Card, Grid, Typography } from "@mui/material";
import { Divider, Input } from "antd";
import { CARTS } from "../../api/carts";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
import { AUTH } from "../../api/auth";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
function Checkout() {
  const { cartSummaryData } = CARTS.getSummary();
  const { checkoutCartMutateAsync, checkoutCartLoading } =
    CARTS.checkoutCartItem();
  const { addEmailAuthentication, addEmailAuthLoading } = AUTH.addEmailAuth();
  const {
    verifyGuestEmailRefetch,
    verifyGuestEmailData,
    verifyGuestEmailLoading,
  } = AUTH.verifyGuestEmail();

  return (
    <Card sx={{ padding: 4, borderRadius: 2 }}>
      <Typography sx={{ color: "#495057", fontSize: 18, mb: 2 }}>
        Order Details
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            component={"img"}
            sx={{
              width: 120,
              height: 120,
              objectFit: "cover",
              borderRadius: 1,
            }}
            src="https://raftrentals.com/wp-content/uploads/2022/06/Photo-May-13-8-41-10-PM-2048x1536.jpg"
          />
          <Box>
            <Typography sx={{ color: "#000" }}>
              {cartSummaryData?.data?.item_count ?? 0} Photos
            </Typography>
            <Typography
              component={Link}
              to="/checkout/photos"
              sx={{ color: "#495057", fontSize: 12, mb: 2 }}
            >
              View your photos
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{ color: "#8392AB", fontSize: 12, fontWeight: 300, mb: 2 }}
        >
          Need &nbsp;
          <Link
            to="https://raftrentals.com/contact/"
            target="_blank"
            style={{
              color: "#01A8E6",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            help?
          </Link>
          .
        </Typography>
      </Box>
      <Divider />
      <Grid container spacing={2} mb={3}>
        <Grid item>
          <Typography sx={{ color: "#495057", fontSize: 14, mb: 2 }}>
            Order Summary
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#8392AB", fontSize: 14 }}>
              Total:
            </Typography>
            <Typography sx={{ color: "#495057", fontSize: 14 }}>
              ${cartSummaryData?.data?.total_price ?? 0}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Formik
          onSubmit={(values) => {
            console.log(values);
            addEmailAuthentication({
              email: values.email,
            })
              .then(async () => {
                Swal.fire("Warning", "Email Added successfully", "success");
                await verifyGuestEmailRefetch();
              })
              .catch((error) => {
                Swal.fire("Warning", error?.message, "warning");
              });
          }}
          initialValues={{ email: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email is incorrect")
              .required("Email is required"),
          })}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form>
              <Box sx={{}}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Input
                    disabled={verifyGuestEmailData?.verified}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                    }}
                    size="middle"
                    placeholder="Email"
                  />
                  <Box
                    component={LoadingButton}
                    disabled={
                      checkoutCartLoading || verifyGuestEmailData?.verified
                    }
                    loading={checkoutCartLoading}
                    onClick={() => handleSubmit()}
                    sx={{
                      borderRadius: 2,
                      padding: 0.2,
                      marginLeft: 1,
                      width: "150px",
                      background:
                        "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
                    }}
                  >
                    <Typography
                      textAlign={"center"}
                      sx={{
                        background: "white",
                        width: "100%",
                        cursor: "pointer",
                        ":hover": {
                          background: "none",
                          color: "white",
                        },
                        fontSize: 12,
                        borderRadius: 1.5,
                        padding: 1,
                      }}
                    >
                      Submit
                    </Typography>
                  </Box>
                </Box>

                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  <ErrorMessage name="email" />
                </div>
              </Box>
            </Form>
          )}
        </Formik>

        <Box
          component={LoadingButton}
          disabled={addEmailAuthLoading || verifyGuestEmailLoading}
          loading={addEmailAuthLoading || verifyGuestEmailLoading}
          onClick={() =>
            verifyGuestEmailRefetch().then((res) => {
              if (res?.data?.verified) {
                checkoutCartMutateAsync()
                  .then((response) => {
                    window.open(response?.url);
                  })
                  .catch((error) => {
                    Swal.fire(
                      "Warning",
                      error?.response?.data?.message,
                      "success"
                    );
                  });
              } else {
                Swal.fire(
                  "Warning",
                  "Please add your email before checkout.",
                  "warning"
                );
              }
            })
          }
          sx={{
            borderRadius: 2,
            padding: 0.2,
            marginTop: 1,
            width: "150px",
            background: "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              background: "white",
              width: "100%",
              cursor: "pointer",
              ":hover": {
                background: "none",
                color: "white",
              },
              fontSize: 12,
              borderRadius: 1.5,
              padding: 1,
            }}
          >
            checkout
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default Checkout;
