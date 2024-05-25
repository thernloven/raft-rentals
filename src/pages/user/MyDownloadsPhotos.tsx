import { Box, Card, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS } from "../../api/photos";
import { useLocation } from "react-router-dom";
import { ORDERS } from "../../api/orders";
import { saveAs } from "file-saver";

function MyDownloadsPhotos() {
  const { state } = useLocation();

  console.log(state, "state");
  const { orderData } = ORDERS.getSpecificOrder({
    orderId: state?.orderId,
  });

  console.log(orderData, "orderData");
  const { addCartsLoading } = PHOTOS.addCarts();
  return (
    <Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          {orderData?.data?.map((item: any) => (
            <Grid
              item
              width={"100%"}
              key={item?.photo_id}
              sm={12}
              md={6}
              lg={3}
            >
              <ImageCard
                loading={addCartsLoading}
                buttonTitle="Download"
                onClick={async () => {
                  saveAs("image_url", item?.url);
                  // .then(() =>
                  //   Swal.fire("Success", "Photo is added in cart.", "success")
                  // )
                  // .catch((error) => {
                  //   console.log(error);
                  //   Swal.fire(
                  //     "Warning",
                  //     error?.response?.data?.message,
                  //     "warning"
                  //   );
                  // });
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

export default MyDownloadsPhotos;
