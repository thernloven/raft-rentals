import { Box, Card, Grid } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS, Photos } from "../../api/photos";
function AllPhotos() {
  const { allPhotosData } = PHOTOS.getAllPhotos();
  console.log(allPhotosData?.data, "allPhotosData");
  return (
    <Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          {allPhotosData?.data?.map((item: any) => (
            <Grid
              item
              width={"100%"}
              key={item?.photo_id}
              sm={12}
              md={6}
              lg={3}
            >
              <ImageCard id={item?.photo_id} image={item?.url} />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
}

export default AllPhotos;
