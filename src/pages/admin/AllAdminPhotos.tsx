import { Box, Card, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Image } from "antd";
import { ADMIN } from "../../api/admin";
function AllAdminPhotos() {
  const { state } = useLocation();
  console.log(state, "state");
  const { allPhotosData } = ADMIN.getAllPhotos();
  // const { addCartsMutateAsync, addCartsLoading } = PHOTOS.addCarts();
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: 20,
          fontWeight: "semibold",
        }}
        mb={1}
        component={"h3"}
      >
        Photos
      </Typography>

      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          {allPhotosData?.data?.map((item: any) => (
            <Grid
              item
              width={"100%"}
              key={item?.photo_id}
              sm={12}
              md={6}
              lg={2}
            >
              <Box
                sx={{
                  height: 120,
                  position: "relative",
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  style={{
                    position: "relative",
                    background: "white",
                    objectFit: "cover",
                  }}
                  width={"100%"}
                  height={"100%"}
                  src={item?.url}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

export default AllAdminPhotos;
