import { useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Carts {
  // login authentication
  public getSummary = () => {
    const {
      data: cartSummaryData,
      isPending: cartSummaryDataLoading,
      refetch: cartSummaryDataAuthentication,
    } = useQuery({
      queryKey: ["getSummary"],
      queryFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/carts/summary.php`,
          method: "GET",
        }),
    });
    return {
      cartSummaryData,
      cartSummaryDataLoading,
      cartSummaryDataAuthentication,
    };
  };
}

export const CARTS = new Carts();
