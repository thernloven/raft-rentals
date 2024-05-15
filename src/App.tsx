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

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/find-photos" element={<FindPhotos />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/my-downloads" element={<MyDownloads />} />
        <Route path="/all-photos" element={<AllPhotos />} />
        <Route path="/my-uploads" element={<UploadPhotos />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/upload-photos" element={<MyUploads />} />

        <Route path="*" element={<Navigate to="/find-photos" />} />
      </Route>
    </Routes>
  );
}

export default App;
