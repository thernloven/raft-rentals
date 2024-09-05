import { useMutation, useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Photos {
  // login authentication
  public getAllPhotos = ({ month, time }: any) => {
    const {
      data: allPhotosData,
      isPending: allPhotosDataLoading,
      refetch: allPhotosDataAuthentication,
    } = useQuery({
      queryKey: ["getAllPhotos", month, time],
      queryFn: async () =>
        await poster({
          url: `/api/photos/photos_time.php?month=${month}&time=${time}`,
          method: "GET",
        }),
    });
    return {
      allPhotosData,
      allPhotosDataLoading,
      allPhotosDataAuthentication,
    };
  };

  public getAllPhotoGrapherPhotos = ({ date }: any) => {
    const {
      data: allPhotosData,
      isPending: allPhotosDataLoading,
      refetch: allPhotosDataAuthentication,
    } = useQuery({
      queryKey: ["getAllPhotos", date],
      queryFn: async () =>
        await poster({
          url: `/api/photos/get_all_photos.php?date=${date}`,
          method: "GET",
        }),
    });
    return {
      allPhotosData,
      allPhotosDataLoading,
      allPhotosDataAuthentication,
    };
  };

  // Register authentication
  public getAllPhotosCalendar = ({ date }: any) => {
    const {
      data: allPhotosCalendarData,
      isPending: allPhotosCalendarDataLoading,
      refetch: allPhotosCalendarRefetch,
    } = useQuery({
      queryKey: ["getAllPhotosCalendar", date],
      queryFn: async () =>
        await poster({
          url: `/api/photos/calendar.php?month=${date}`,
          method: "GET",
        }),
    });
    return {
      allPhotosCalendarData,
      allPhotosCalendarDataLoading,
      allPhotosCalendarRefetch,
    };
  };

  public addCarts = () => {
    const {
      data: addCartsData,
      isPending: addCartsLoading,
      mutateAsync: addCartsMutateAsync,
    } = useMutation({
      mutationFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/carts/add_to_cart.php`,
          method: "POST",
          bodyData: bodyData,
        }),
    });
    return {
      addCartsData,
      addCartsLoading,
      addCartsMutateAsync,
    };
  };

  public uploadPhotosByPhotographer = () => {
    const {
      data: uploadPhotosByPhotographerData,
      isPending: uploadPhotosByPhotographerDataLoading,
      mutateAsync: uploadPhotosByPhotographerDataMutateAsync,
    } = useMutation({
      mutationFn: async ({ formData }: any) =>
        await poster({
          url: `/api/photos/upload_photos.php`,
          method: "POST",
          bodyData: formData,
        }),

      // await axios.post(BASE_API + "/api/photos/upload_photos.php", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // }),
    });
    return {
      uploadPhotosByPhotographerData,
      uploadPhotosByPhotographerDataLoading,
      uploadPhotosByPhotographerDataMutateAsync,
    };
  };
}

export const PHOTOS = new Photos();
