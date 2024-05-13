import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import ProfileSettings from "./pages/ProfileSettings";
import FindPhotos from "./pages/FindPhotos";
import MyDownloads from "./pages/MyDownloads";
import AllUsers from "./pages/AllUsers";
import AllPhotos from "./pages/AllPhotos";
import MyUploads from "./pages/MyUploads";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/find-photos" element={<FindPhotos />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/my-downloads" element={<MyDownloads />} />
        <Route path="/all-photos" element={<AllPhotos />} />
        <Route path="/my-uploads" element={<MyUploads />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="*" element={<Navigate to="/find-photos" />} />
      </Route>
    </Routes>
  );
}

export default App;
