import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { useEffect } from "react";

function ProtectedRoute() {
  const { role } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate("/auth/login", { replace: true });
    }
  }, [role, navigate]);

  if (!role) {
    // Optionally, render a loading indicator or null while redirecting
    return null;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
