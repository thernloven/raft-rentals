import { Box, Card, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
function FindPhotos() {
  return (
    <Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          {new Array(10).fill(20).map((_, index) => (
            <Grid item width={"100%"} key={index} sm={12} md={6} lg={4}>
              <ImageCard />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

export default FindPhotos;
