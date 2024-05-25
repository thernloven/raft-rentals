import { Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

const RoleBasedRedirect = () => {
  const { userId, role } = useAppSelector((state) => state.userReducer);
  // console.log(userId, role, "userId, role");
  if (!userId) {
    return <Navigate to="/auth/login" />;
  }

  switch (role) {
    case "admin":
      return <Navigate to="/all-users" />;
    case "photographer":
      return <Navigate to="/upload-photos" />;
    case "customer":
      return <Navigate to="/find-photos" />;
    case "non-customer":
      return <Navigate to="/find-photos" />;
    default:
      return <Navigate to="/auth/login" />;
  }
};

export default RoleBasedRedirect;
