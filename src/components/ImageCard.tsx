import { Box, Typography } from "@mui/material";
import { Image } from "antd";
function ImageCard() {
  return (
    <Box>
      <Box
        sx={{
          height: 250,
          position: "relative",
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            position: "relative",
            background: "white",
          }}
          width={"100%"}
          height={"100%"}
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
        />
      </Box>

      <Box
        sx={{
          borderRadius: 2,
          padding: 0.3,
          marginTop: 1,
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)",
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
            borderRadius: 2,
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
