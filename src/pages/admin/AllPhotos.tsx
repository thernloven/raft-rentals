import { Box, Card, Grid, Typography } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS } from "../../api/photos";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { CARTS } from "../../api/carts";
import { useEffect, useState } from "react";
import { Image } from "antd";

function AllPhotos() {
  const { state } = useLocation();

  const [currentImage, setCurrentImage] = useState<number>(0);
  const { allPhotosData, allPhotosDataAuthentication } = PHOTOS.getAllPhotos({
    month: state?.date,
    time: state?.time,
  });
  const { cartItemsData, cartItemsRefetch } = CARTS.getCartItems();
  const { addCartsMutateAsync, addCartsLoading } = PHOTOS.addCarts();
  // console.log(cartItemsData?.data, "allPhotosData", allPhotosData?.data);
  const addIsAddedProperty = (allData: any, checkedData: any) => {
    const checkedMap = new Map(
      checkedData?.data?.map((photo: any) => [photo.photo_id, true])
    );

    return allData?.data?.map((photo: any) => ({
      ...photo,
      isAdded: checkedMap.has(photo.photo_id),
    }));
  };
  const resultArray = addIsAddedProperty(allPhotosData, cartItemsData);

  useEffect(() => {
    cartItemsRefetch();
    allPhotosDataAuthentication();
  }, [addCartsLoading]);

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
        Sold in groups of up to 10 photos for $20. Multiple photo packages are
        available for purchase.
      </Typography>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          <Image.PreviewGroup
            preview={{
              current: currentImage,
              onChange(current) {
                setCurrentImage(current + 1);
              },
            }}
            items={allPhotosData?.data?.map((photo: any) => photo?.url)}
          >
            {resultArray?.map((item: any, index: any) => (
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
                  buttonTitle={item?.isAdded ? "Added" : "Add Cart"}
                  onImageClick={() => {
                    setCurrentImage(index);
                  }}
                  onClick={async () => {
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
          </Image.PreviewGroup>
        </Grid>
      </Card>
    </Box>
  );
}

export default AllPhotos;
