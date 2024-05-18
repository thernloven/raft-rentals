import { Box, Typography } from "@mui/material";
import { Image } from "antd";
import LoadingButton from "@mui/lab/LoadingButton";
function ImageCard({
  image,
  buttonTitle,
  loading,
  onClick,
  isDelete = false,
}: any) {
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
        loading={loading}
        disabled={loading}
        onClick={onClick}
        sx={{
          borderRadius: 2,
          padding: 0.2,
          marginTop: 1,
          width: "100%",
          background: !isDelete
            ? "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)"
            : "linear-gradient(-122deg, #EB001B 20%, #EB001B 80%)",
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
          {buttonTitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default ImageCard;
