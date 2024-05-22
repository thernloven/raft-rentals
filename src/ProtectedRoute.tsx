import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

function ProtectedRoute({ roles }: any) {
  const { role, userId } = useAppSelector((state) => state.userReducer);

  console.log(roles, role, userId);
  // useEffect(() => {
  //   if (!role) {
  //     navigate("/auth/login", { replace: true });
  //   }
  // }, [role, navigate]);

  // if (!userId) {
  //   return <Navigate to="/auth/login" />;
  // }

  if (roles && !roles.includes(role)) {
    // return <Navigate to="/auth/login" />;
    return;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
