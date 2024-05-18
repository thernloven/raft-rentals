import { Box, Card, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { CARTS } from "../../api/carts";
import Swal from "sweetalert2";
function SeeAllPhotos() {
  const { cartItemsData, cartItemsRefetch } = CARTS.getCartItems();

  const { deleteCartItemMutateAsync, deleteCartItemDataLoading } =
    CARTS.deleteCartItem();
  console.log(cartItemsData?.data, "allPhotosData");
  return (
    <Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          {cartItemsData?.data?.map((item: any) => (
            <Grid
              item
              width={"100%"}
              key={item?.photo_id}
              sm={12}
              md={6}
              lg={3}
            >
              <ImageCard
                isDelete
                loading={deleteCartItemDataLoading}
                buttonTitle="Remove Item"
                onClick={async () => {
                  await deleteCartItemMutateAsync({
                    id: item?.photo_id,
                  })
                    .then(async () => {
                      await cartItemsRefetch();
                      Swal.fire(
                        "Success",
                        "Photo is remove from cart.",
                        "success"
                      );
                    })
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

export default SeeAllPhotos;
