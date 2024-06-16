import { useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Public {
  // login authentication
  public getAllPublicCalendar = ({ month }: any) => {
    const {
      data: getAllPublicCalendarData,
      isPending: getAllPublicCalendarDataLoading,
      refetch: getAllPublicCalendarDataRefetch,
    } = useQuery({
      queryKey: ["getAllPublicCalendar", month],
      queryFn: async () =>
        await poster({
          url: `/api/photos/public_calendar.php?month=${month}`,
          method: "GET",
        }),
    });
    return {
      getAllPublicCalendarData,
      getAllPublicCalendarDataLoading,
      getAllPublicCalendarDataRefetch,
    };
  };
  public getAllPublicCalendarPhotos = ({ month, time }: any) => {
    const {
      data: getAllPublicCalendarPhotosData,
      isPending: getAllPublicCalendarPhotosDataLoading,
      refetch: getAllPublicCalendarPhotosDataRefetch,
    } = useQuery({
      queryKey: ["getAllPublicCalendarPhotos", month, time],
      queryFn: async () =>
        await poster({
          url: `/api/photos/public_photos_time.php?month=${month}&time=${time}`,
          method: "GET",
        }),
    });
    return {
      getAllPublicCalendarPhotosData,
      getAllPublicCalendarPhotosDataLoading,
      getAllPublicCalendarPhotosDataRefetch,
    };
  };
}

export const PUBLIC = new Public();
