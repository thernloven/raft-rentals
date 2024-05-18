import { useMutation, useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Photos {
  // login authentication
  public getAllPhotos = () => {
    const {
      data: allPhotosData,
      isPending: allPhotosDataLoading,
      refetch: allPhotosDataAuthentication,
    } = useQuery({
      queryKey: ["getAllPhotos"],
      queryFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/photos/photos_time.php?month=2024-04-25&time=11:00`,
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
  public getAllPhotosCalendar = () => {
    const {
      data: allPhotosCalendarData,
      isPending: allPhotosCalendarDataLoading,
      refetch: allPhotosCalendarRefetch,
    } = useQuery({
      queryKey: ["getAllPhotosCalendar"],
      queryFn: async () =>
        await poster({
          url: `/api/photos/calendar.php?month=2024-04`,
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
}

export const PHOTOS = new Photos();
