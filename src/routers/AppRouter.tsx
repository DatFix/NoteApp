import { Routes, Route } from "react-router-dom";
import App from "../app/App";
import CategoryPage from "../app/public/categories/CategoryPage";
import NotePage from "../app/public/notes/NotePage";
import SettingPage from "../app/public/settings/SettingPage";
import NotfoundPage from "../app/public/404/NotfoundPage";
import { ROUTE_LINK } from "../constants/routes.constant";
import MainLayout from "../app/MainLayout";
import LoginPage from "../app/auth/login/LoginPage";
import ImagePage from "../app/public/images/ImagePage";
import VideoPage from "../app/public/videos/VideoPage";
import FilePage from "../app/public/files/FilePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTE_LINK.HOME} element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path={ROUTE_LINK.NOTES} element={<NotePage />} />
        <Route path={ROUTE_LINK.IMAGES} element={<ImagePage />} />
        <Route path={ROUTE_LINK.VIDEOS} element={<VideoPage />} />
        <Route path={ROUTE_LINK.FILES} element={<FilePage />} />
        <Route path={ROUTE_LINK.CATEGORIES} element={<CategoryPage />} />
        <Route path={ROUTE_LINK.SETTINGS} element={<SettingPage />} />
      </Route>

      <Route path={ROUTE_LINK.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}
