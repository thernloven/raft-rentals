import { useMutation, useQuery } from "@tanstack/react-query";
import { poster } from "../poster";

export class Admin {
  // login authentication
  public getAllUsers = ({ role }: any) => {
    const {
      data: allUsersData,
      isPending: allUsersDataLoading,
      refetch: allUsersDataRefetch,
    } = useQuery({
      queryKey: ["getAllUsers", role],
      queryFn: async () =>
        await poster({
          url: `/api/admin/get_users.php?user_role=${role}`,
          method: "GET",
        }),
    });
    return {
      allUsersData,
      allUsersDataLoading,
      allUsersDataRefetch,
    };
  };

  // All Photos
  public getAllPhotos = () => {
    const {
      data: allPhotosData,
      isPending: allPhotosDataLoading,
      refetch: allPhotosDataAuthentication,
    } = useQuery({
      queryKey: ["getAllPhotos"],
      queryFn: async () =>
        await poster({
          url: `/api/photos/get_all_photos.php`,
          method: "GET",
        }),
    });
    return {
      allPhotosData,
      allPhotosDataLoading,
      allPhotosDataAuthentication,
    };
  };

  public getUserDetails = ({ userId }: any) => {
    const {
      data: userData,
      isPending: userDataLoading,
      mutateAsync: userDataMutateAsync,
    } = useMutation({
      mutationFn: async () =>
        await poster({
          url: `/api/admin/get_user_information.php?user_id=${userId}`,
          method: "GET",
        }),
    });
    return {
      userData,
      userDataLoading,
      userDataMutateAsync,
    };
  };

  public editAdminUser = () => {
    const {
      data: editAdminUserData,
      isPending: editAdminUserDataLoading,
      mutateAsync: editAdminUserDataMutateAsync,
    } = useMutation({
      mutationFn: async ({ bodyData }: any) =>
        await poster({
          url: `/api/admin/edit_user.php`,
          method: "POST",
          bodyData: bodyData,
        }),
    });
    return {
      editAdminUserData,
      editAdminUserDataLoading,
      editAdminUserDataMutateAsync,
    };
  };
}

export const ADMIN = new Admin();
