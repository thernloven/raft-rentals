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
              background: "linear-gradient(90deg, #CED4DA 30%, #EBEFF4 100%)",

              padding: 1,
              borderRadius: 1.5,
              width: 100,
            }}
          >
            <Typography
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              CANCEL
            </Typography>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(90deg, #3A416F 0%, #141727 100%)",
              padding: 1,
              cursor: "pointer",
              borderRadius: 1.5,
              width: 100,
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 400,
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
