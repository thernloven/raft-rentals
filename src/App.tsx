import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import ProfileSettings from "./pages/ProfileSettings";
import FindPhotos from "./pages/user/FindPhotos";
import MyDownloads from "./pages/user/MyDownloads";
import AllUsers from "./pages/admin/AllUsers";
import AllPhotos from "./pages/admin/AllPhotos";
import MyUploads from "./pages/photographer/MyUploads";
import UploadPhotos from "./pages/photographer/UploadPhotos";
import Checkout from "./pages/user/Checkout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import SeeAllPhotos from "./pages/user/SeeAllPhotos";
import SuccessPage from "./pages/SuccessPage";
import EmailSuccessPage from "./pages/EmailSuccessPage";
import RoleBasedRedirect from "./RoleBasedRedirect";
import ProtectedRoute from "./ProtectedRoute";
import MyDownloadsPhotos from "./pages/user/MyDownloadsPhotos";
import { useAppSelector } from "./store/hooks";
import AllAdminPhotos from "./pages/admin/AllAdminPhotos";
import Calendar from "./pages/landing/Calendar";
import CalendarPhotos from "./pages/landing/CalendarPhotos";

function App() {
  // const roles = [
  //   "admin",
  //   "photographer",
  //   "customer",
  //   "non-customer",
  //   "deleted",
  // ];
  const { userId, role } = useAppSelector((state) => state.userReducer);
  console.log(userId, role, "userId, role");
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route index path="/calendar" element={<Calendar />} />
      <Route path="/" element={<RoleBasedRedirect />} />
      <Route path="/photos" element={<CalendarPhotos />} />

      <Route element={<MainLayout />}>
        <Route
          element={<ProtectedRoute roles={["customer", "non-customer"]} />}
        >
          <Route path="/find-photos" element={<FindPhotos />} />
          <Route path="/find-photos/photos" element={<AllPhotos />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/photos" element={<SeeAllPhotos />} />
          <Route path="/checkout/success" element={<SuccessPage />} />
          <Route path="/checkout/failed" element={<SeeAllPhotos />} />
          <Route path="/my-downloads" element={<MyDownloads />} />
          <Route path="/my-downloads/photos" element={<MyDownloadsPhotos />} />
        </Route>

        <Route element={<ProtectedRoute roles={["admin"]} />}>
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/admin/photos" element={<AllAdminPhotos />} />
        </Route>

        <Route element={<ProtectedRoute roles={["photographer"]} />}>
          <Route path="/upload-photos" element={<MyUploads />} />
          <Route path="/all-photos" element={<AllPhotos />} />
          <Route path="/my-uploads" element={<UploadPhotos />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              roles={["customer", "admin", "non-customer", "photographer"]}
            />
          }
        >
          <Route path="/profile" element={<ProfileSettings />} />
        </Route>
      </Route>

      <Route path="/email/success" element={<EmailSuccessPage />} />
    </Routes>
  );
}

export default App;
