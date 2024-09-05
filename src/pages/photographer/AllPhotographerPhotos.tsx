import { Box, Card, Grid, Typography } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { PHOTOS } from "../../api/photos";
import Swal from "sweetalert2";
import { CARTS } from "../../api/carts";
import { useEffect, useState } from "react";
import { DatePicker, Image, Spin } from "antd";
import { useInView } from "react-intersection-observer";
function AllPhotographerPhotos() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, // Trigger when 50% of the last item is visible
  });

  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const {
    allPhotosData,
    allPhotosDataAuthentication,
    allPhotosDataLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = PHOTOS.getAllPhotoGrapherPhotos({
    date: date,
  });
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  const { cartItemsData, cartItemsRefetch } = CARTS.getCartItems();
  const { addCartsMutateAsync, addCartsLoading } = PHOTOS.addCarts();
  // console.log(cartItemsData?.data, "allPhotosData", allPhotosData?.data);
  const addIsAddedProperty = (allData: any, checkedData: any) => {
    const checkedMap = new Map(
      checkedData?.data?.map((photo: any) => [photo.photo_id, true])
    );

    const content = allData?.pages.flatMap((pages: any) =>
      pages?.data.map((photo: any) => ({
        ...photo,
        isAdded: checkedMap.has(photo.photo_id),

        // if (todos.length == index + 1) {
        //   return <TodoCard innerRef={ref} key={todo.id} todo={todo} />;
        // }
        // return <TodoCard key={todo.id} todo={todo} />;
      }))
    );
    return content;
    // return allData?.pages?.map((data: any) =>
    //   data?.data?.map((photo: any) => ({
    //     ...photo,
    //     isAdded: checkedMap.has(photo.photo_id),
    //   }))
    // );
  };

  const resultArray = addIsAddedProperty(allPhotosData, cartItemsData);

  useEffect(() => {
    cartItemsRefetch();
    allPhotosDataAuthentication();
  }, [addCartsLoading]);

  console.log(resultArray, allPhotosData, "resultArrayresultArray");
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: 20,
          fontWeight: "semibold",
        }}
        mb={1}
        component={"h3"}
      >
        Photos
      </Typography>
      <Box style={{ display: "flex", justifyContent: "end", marginBottom: 10 }}>
        <DatePicker
          onChange={(date) => {
            console.log(date?.format("YYYY-MM-DD"));
            setDate(date?.format("YYYY-MM-DD"));
          }}
        />
      </Box>
      <Card sx={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", padding: 2 }}>
        <Grid container spacing={2}>
          <Image.PreviewGroup
            preview={{
              current: currentImage,
              visible, // Controls the visibility of the preview modal
              onVisibleChange: (visible) => setVisible(visible),
              onChange(current) {
                setCurrentImage(current + 1);
              },
            }}
            items={resultArray?.map((photo: any) => photo?.url)}
          >
            {resultArray?.map((item: any, index: any) => (
              <Grid
                item
                width={"100%"}
                key={item?.photo_id}
                sm={12}
                md={6}
                lg={2}
                ref={index === resultArray?.length - 1 ? ref : null}
              >
                <ImageCard
                  loading={addCartsLoading}
                  isDownload
                  isButton={false}
                  buttonTitle={item?.isAdded ? "Added" : "Add Cart"}
                  onImageClick={() => {
                    setCurrentImage(index);
                    setVisible(true);
                  }}
                  onClick={async () => {
                    await addCartsMutateAsync({
                      bodyData: {
                        photo_id: item?.photo_id,
                      },
                    })
                      .then(() =>
                        Swal.fire(
                          "Success",
                          "Photo is added in cart.",
                          "success"
                        )
                      )
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
          </Image.PreviewGroup>
        </Grid>
        {(allPhotosDataLoading || isFetchingNextPage) && <Spin />}
      </Card>
    </Box>
  );
}

export default AllPhotographerPhotos;
