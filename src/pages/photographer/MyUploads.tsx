import { Box, Card, Typography } from "@mui/material";

function MyUploads() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card
        sx={{ padding: 2, borderRadius: 2, maxWidth: "50%", width: "100%" }}
      >
        <Typography sx={{ color: "#495057", fontSize: 18, mb: 2 }}>
          Upload Photos
        </Typography>
        <Box component={"label"} htmlFor="upload">
          <Box
            sx={{
              border: "1px dashed #CED4DA",
              cursor: "pointer",
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                color: "#64748B",
                fontWeight: "semibold",
              }}
            >
              Drop some files here to upload
            </Typography>
            <input type="file" id="upload" style={{ display: "none" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "10px",
            gap: 2,
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              padding: 0.2,
              marginTop: 1,
              width: 150,
              background: "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{
                cursor: "pointer",
                background: "white",
                color: "black",
                fontSize: 12,
                borderRadius: 1.5,
                padding: 1,
              }}
            >
              CANCEL
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: 2,
              padding: 0.2,
              marginTop: 1,
              width: 150,
              background: "linear-gradient(-122deg, #01a8e6 0%, #070077 100%)",
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{
                cursor: "pointer",

                color: "white",
                fontSize: 12,
                borderRadius: 1.5,
                padding: 1,
              }}
            >
              ADD PHOTOS
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default MyUploads;
