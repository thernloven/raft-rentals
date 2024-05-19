import { useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Orders {
  // login authentication
  public getOrders = () => {
    const {
      data: ordersData,
      isPending: ordersLoading,
      refetch: ordersRefetch,
    } = useQuery({
      queryKey: ["getOrders"],
      queryFn: async () =>
        await poster({
          url: `/api/orders/get_orders.php`,
          method: "GET",
        }),
    });
    return {
      ordersData,
      ordersLoading,
      ordersRefetch,
    };
  };
}

export const ORDERS = new Orders();
