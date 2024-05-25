import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

function ProtectedRoute({ roles }: any) {
  const { role, userId } = useAppSelector((state) => state.userReducer);

  if (!userId) {
    return <Navigate to="/auth/login" />;
  }

  if (roles && !roles.includes(role)) {
    return;
  }

  return <Outlet />;
}

export default ProtectedRoute;
