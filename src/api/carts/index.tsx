import { useMutation, useQuery } from "@tanstack/react-query";
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
      queryFn: async () =>
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

  public getCartItems = () => {
    const {
      data: cartItemsData,
      isPending: cartItemsDataLoading,
      refetch: cartItemsRefetch,
    } = useQuery({
      queryKey: ["getCartItems"],
      queryFn: async () =>
        await poster({
          url: `/api/carts/get_items.php`,
          method: "GET",
        }),
    });
    return {
      cartItemsData,
      cartItemsDataLoading,
      cartItemsRefetch,
    };
  };

  public deleteCartItem = () => {
    const {
      data: deleteCartItemData,
      isPending: deleteCartItemDataLoading,
      mutateAsync: deleteCartItemMutateAsync,
    } = useMutation({
      mutationFn: async ({ id }: any) =>
        await poster({
          url: `/api/carts/delete_item.php?photo_id=${id}`,
          method: "GET",
        }),
    });
    return {
      deleteCartItemData,
      deleteCartItemDataLoading,
      deleteCartItemMutateAsync,
    };
  };

  public checkoutCartItem = () => {
    const {
      data: checkoutCartItemData,
      isPending: checkoutCartLoading,
      mutateAsync: checkoutCartMutateAsync,
    } = useMutation({
      mutationFn: async () =>
        await poster({
          url: `/api/carts/checkout.php`,
          method: "POST",
        }),
    });
    return {
      checkoutCartItemData,
      checkoutCartLoading,
      checkoutCartMutateAsync,
    };
  };
}

export const CARTS = new Carts();
