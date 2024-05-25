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
  public getSpecificOrder = ({ orderId }: any) => {
    const {
      data: orderData,
      isPending: orderLoading,
      refetch: orderRefetch,
    } = useQuery({
      queryKey: ["getSpecificOrder", orderId],
      queryFn: async () =>
        await poster({
          url: `/api/orders/order_photos.php?order_id=${orderId}`,
          method: "GET",
        }),
    });
    return {
      orderData,
      orderLoading,
      orderRefetch,
    };
  };
}

export const ORDERS = new Orders();
