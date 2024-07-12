import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

function ProtectedRoute({ roles }: any) {
  const { role, userId } = useAppSelector((state) => state.userReducer);
  console.log(!userId && !role);
  if (!userId && !role) {
    return <Navigate to="/auth/login" />;
  }

  if (roles && !roles.includes(role)) {
    return;
  }

  return <Outlet />;
}

export default ProtectedRoute;
