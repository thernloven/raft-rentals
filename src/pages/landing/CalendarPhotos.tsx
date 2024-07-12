import { Box, Card, Grid, Typography } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS } from "../../api/photos";
import { useLocation, useNavigate } from "react-router-dom";
import { PUBLIC } from "../../api/public";
import WithoutHeader from "../../components/WithoutHeader";
import { Image } from "antd";
import Swal from "sweetalert2";
import { useState } from "react";

function CalendarPhotos() {
  const { state } = useLocation();
  console.log(state, "state");
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState<number>(0);
  const { getAllPublicCalendarPhotosData: allPhotosData } =
    PUBLIC.getAllPublicCalendarPhotos({
      month: state?.date,
      time: state?.time,
    });

  const { addCartsLoading, addCartsMutateAsync } = PHOTOS.addCarts();
  return (
    <Box>
      <WithoutHeader />
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
        Sold in groups of up to 10 photos for $20. Multiple photo packages are
        available for purchase.
      </Typography>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Image.PreviewGroup
          preview={{
            current: currentImage,
            onChange(current) {
              setCurrentImage(current + 1);
            },
          }}
          items={allPhotosData?.data?.map((photo: any) => photo?.url)}
        >
          <Grid container spacing={2}>
            {allPhotosData?.data?.map((item: any, index: number) => (
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
                  onImageClick={() => {
                    setCurrentImage(index);
                  }}
                  onClick={async () => {
                    navigate("/checkout");
                    // Swal.fire({
                    //   title: "Warning",
                    //   icon: "warning",
                    //   text: "To purchase photos please create an account",
                    //   confirmButtonText: "Create account",
                    // }).then(() => {
                    //   navigate("/auth/register");
                    // });

                    await addCartsMutateAsync({
                      bodyData: {
                        photo_id: item?.photo_id,
                      },
                    })
                      .then(() =>
                        Swal.fire(
                          "Success",
                          "Photo is added in cart.",
                          "success"
                        )
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
        </Image.PreviewGroup>
      </Card>
    </Box>
  );
}

export default CalendarPhotos;
