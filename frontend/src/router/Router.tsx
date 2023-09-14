import { Route, Routes } from "react-router-dom";
import { Home, About, Branding, Training, Publications, Blog, Courses, Networks, Login } from "../pages";
import AnonymousRoute from "./nonymousRoute";
import WebsiteLayout from "../layout/WebsiteLayout";
import AdminRoute from "./adminRoute";
import AdminLayout from "../layout/AdminLayout";
import { StartPage } from "../admin";

const index = () => {
  return (
    <Routes>
      <Route element={
        <AnonymousRoute>
          <WebsiteLayout />
        </AnonymousRoute>
      }>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/training" element={<Training />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/networks" element={<Networks />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      }>
        <Route path="/admin" element={<StartPage />} />
      </Route>
    </Routes>
  );
};

export default index;
