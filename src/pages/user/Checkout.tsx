import { Box, Card, Grid, Typography } from "@mui/material";
import { Divider } from "antd";

function Checkout() {
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
              width: 80,
              height: 100,
              objectFit: "cover",
              borderRadius: 1,
            }}
            src="https://opportunitymarketing.co.uk/wp-content/uploads/2020/01/Product_Marketing-1030x586.jpg"
          />
          <Box>
            <Typography sx={{ color: "#000" }}>10 Photos</Typography>
            <Typography sx={{ color: "#495057", fontSize: 12, mb: 2 }}>
              See photos
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{ color: "#8392AB", fontSize: 12, fontWeight: 300, mb: 2 }}
        >
          Do you like the product? Leave us a review{" "}
          <span
            style={{
              color: "black",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            here
          </span>
          .
        </Typography>
      </Box>
      <Divider />
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Typography sx={{ color: "#495057", fontSize: 14, mb: 2 }}>
            Payment Method
          </Typography>
          <Box>
            <Typography sx={{ color: "#495057", fontSize: 14, mb: 2 }}>
              Billing Information
            </Typography>
            <Box
              sx={{
                background: "#F8F9FA",
                width: 400,
                padding: 2,
                borderRadius: 3,
              }}
            >
              <Typography sx={{ color: "#495057", fontSize: 14, mb: 2 }}>
                Oliver Liam
              </Typography>
              {[
                {
                  label: "Company Name:",
                  value: "Viking Burrito",
                },
                {
                  label: "Email Address::",
                  value: "oliver@burrito.com",
                },
                {
                  label: "VAT Number::",
                  value: "FRB1235476",
                },
              ].map((item, key) => (
                <Box
                  key={key}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{ color: "#8392AB", fontWeight: 400, fontSize: 12 }}
                  >
                    {item.label}
                  </Typography>
                  <Typography sx={{ color: "#495057", fontSize: 12 }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Typography sx={{ color: "#495057", fontSize: 14, mb: 2 }}>
            Order Summary
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#8392AB", fontSize: 14 }}>
              Total:
            </Typography>
            <Typography sx={{ color: "#495057", fontSize: 14 }}>
              $105.95
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          sx={{
            borderRadius: 2,
            padding: 0.2,
            marginTop: 1,
            width: 150,
            background: "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              cursor: "pointer",

              color: "white",
              fontSize: 12,
              borderRadius: 1.5,
              padding: 1,
            }}
          >
            CHECKOUT
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default Checkout;
