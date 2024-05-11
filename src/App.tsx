import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import ProfileSettings from "./pages/ProfileSettings";
import FindPhotos from "./pages/FindPhotos";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/find-photos" element={<FindPhotos />} />
        <Route path="/profile" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
