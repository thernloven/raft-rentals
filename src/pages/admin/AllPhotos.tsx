import { Box, Card, Grid, Typography } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS } from "../../api/photos";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

function AllPhotos() {
  const { state } = useLocation();
  console.log(state, "state");
  const { allPhotosData } = PHOTOS.getAllPhotos({
    month: state?.date,
    time: state?.time,
  });
  const { addCartsMutateAsync, addCartsLoading } = PHOTOS.addCarts();
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
      <Typography
        variant="h1"
        color={"gray"}
        mb={3}
        fontSize={14}
        fontWeight={400}
        component={"h3"}
      >
        Sold in groups of up to 10 photos for $20 each. Multiple photo packages
        are available for purchase.
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
              <ImageCard
                loading={addCartsLoading}
                buttonTitle="Add Cart"
                onClick={async () => {
                  await addCartsMutateAsync({
                    bodyData: {
                      photo_id: item?.photo_id,
                    },
                  })
                    .then(() =>
                      Swal.fire("Success", "Photo is added in cart.", "success")
                    )
                    .catch((error) => {
                      console.log(error);
                      Swal.fire(
                        "Warning",
                        error?.response?.data?.message,
                        "warning"
                      );
                    });
                }}
                id={item?.photo_id}
                image={item?.url}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

export default AllPhotos;
