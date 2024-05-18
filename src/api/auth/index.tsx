import { useMutation, useQuery } from "@tanstack/react-query";
import { poster } from "../poster";
import store from "../../store/Store";

export class Authentication {
  store: any;
  constructor() {
    this.store = store.getState();
  }

  // login authentication
  public loginAuth = () => {
    const {
      data: loginAuthData,
      isPending: loginAuthLoading,
      mutateAsync: loginAuthentication,
    } = useMutation({
      mutationFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/auth/login.php`,
          method: "POST",
          bodyData: bodyData,
        }),
    });
    return {
      loginAuthLoading,
      loginAuthData,
      loginAuthentication,
    };
  };

  // Register authentication
  public registerAuth = () => {
    const {
      data: registerAuthData,
      isPending: registerAuthLoading,
      mutateAsync: registerAuthentication,
    } = useMutation({
      mutationFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/auth/register.php`,
          method: "POST",
          bodyData: bodyData,
        }),
    });
    return {
      registerAuthentication,
      registerAuthData,
      registerAuthLoading,
    };
  };

  // User profile authentication
  public userProfileAuth = () => {
    const {
      data: userProfileAuthData,
      isPending: userProfileAuthLoading,
      refetch: userProfileAuthRefetch,
    } = useQuery({
      queryKey: ["userProfileAuth"],
      queryFn: async () => {
        return await poster({
          url: `/api/auth/get_user_information.php`,
          method: "GET",
        });
      },
    });
    return {
      userProfileAuthData,
      userProfileAuthLoading,
      userProfileAuthRefetch,
    };
  };

  // User profile authentication update
  public userProfileUpdateAuth = () => {
    const {
      data: userProfileUpdateData,
      isPending: userProfileUpdateLoading,
      mutateAsync: userProfileAuthMutateAsync,
    } = useMutation({
      mutationFn: async ({ bodyData }: any) => {
        return await poster({
          url: `/api/auth/profile.php`,
          method: "POST",
          bodyData: bodyData,
        });
      },
    });
    return {
      userProfileUpdateData,
      userProfileUpdateLoading,
      userProfileAuthMutateAsync,
    };
  };
}

export const AUTH = new Authentication();
