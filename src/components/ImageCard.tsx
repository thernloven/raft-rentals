import { Box, Typography } from "@mui/material";
import { Image } from "antd";
function ImageCard() {
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
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        />
      </Box>

      <Box
        sx={{
          borderRadius: 2,
          padding: 0.2,
          marginTop: 1,
          background: "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            background: "white",
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
