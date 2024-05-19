import { Route, Routes, Navigate } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      <Route element={<MainLayout />}>
        <Route path="/find-photos" element={<FindPhotos />} />
        <Route path="/find-photos/photos" element={<AllPhotos />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/my-downloads" element={<MyDownloads />} />
        <Route path="/all-photos" element={<AllPhotos />} />
        <Route path="/my-uploads" element={<UploadPhotos />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/photos" element={<SeeAllPhotos />} />
        <Route path="/checkout/success" element={<SuccessPage />} />
        <Route path="/checkout/failed" element={<SeeAllPhotos />} />
        <Route path="/upload-photos" element={<MyUploads />} />
        <Route path="*" element={<Navigate to="/find-photos" />} />
      </Route>
      <Route path="/email/success" element={<EmailSuccessPage />} />
    </Routes>
  );
}

export default App;
