import { Box, Typography } from "@mui/material";
import { Image } from "antd";
import { PHOTOS } from "../api/photos";
import LoadingButton from "@mui/lab/LoadingButton";
import Swal from "sweetalert2";
function ImageCard({ image, id }: any) {
  const { addCartsMutateAsync, addCartsLoading } = PHOTOS.addCarts();
  return (
    <Box>
      <Box
        sx={{
          height: 220,
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
          src={image}
        />
      </Box>

      <Box
        component={LoadingButton}
        loading={addCartsLoading}
        disabled={addCartsLoading}
        onClick={async () => {
          await addCartsMutateAsync({
            bodyData: {
              photo_id: id,
            },
          })
            .then(() =>
              Swal.fire("Success", "Photo is added in cart.", "success")
            )
            .catch((error) => {
              console.log(error);
              Swal.fire("Warning", error?.response?.data?.message, "warning");
            });
        }}
        sx={{
          borderRadius: 2,
          padding: 0.2,
          marginTop: 1,
          width: "100%",
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
          Add to Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageCard;
