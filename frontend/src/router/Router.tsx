import { Route, Routes } from "react-router-dom";
import { Home, About, Branding, Training, Publications, Blog, Courses, Networks, Login } from "../pages";
import AnonymousRoute from "./nonymousRoute";
import WebsiteLayout from "../layout/WebsiteLayout";
import AdminRoute from "./adminRoute";
import AdminLayout from "../layout/AdminLayout";
import { BannerHomeMng, BlogMng, BookAboutMng, BrandAboutMng, CliftonAboutMng, CompaniesHomeMng, CoursesMng, EducationAboutMng, ExperienceAboutMng, FaqBrandingMng, HomeAboutMng, MissionVisionMng, NetworksHomeMng, PlayListsMng, ProfilePdfMng, SliderHeroMng, StartPage, StepsBrandingMng, StoryAboutMng, TestimonialsMng, TrainersMng, TrainingMng } from "../admin";
import PageLoadBook from "../pages/PageLoadBook";

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
        <Route path="/download-book-pdf" element={<PageLoadBook />} />
      </Route>
      <Route element={
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      }>
        <Route path="/admin" element={<StartPage />} />
        {/* Home Management */}
        <Route path="/admin/home/slider-hero" element={<SliderHeroMng />} />
        <Route path="/admin/home/about" element={<HomeAboutMng />} />
        <Route path="/admin/home/testimonials" element={<TestimonialsMng />} />
        <Route path="/admin/home/banner" element={<BannerHomeMng />} />
        <Route path="/admin/home/companies" element={<CompaniesHomeMng />} />
        <Route path="/admin/home/networks" element={<NetworksHomeMng />} />
        {/* About Management */}
        <Route path="/admin/about/vision-mission" element={<MissionVisionMng />} />
        <Route path="/admin/about/story" element={<StoryAboutMng />} />
        <Route path="/admin/about/brand" element={<BrandAboutMng />} />
        <Route path="/admin/about/clifton" element={<CliftonAboutMng />} />
        <Route path="/admin/about/education" element={<EducationAboutMng />} />
        <Route path="/admin/about/experience" element={<ExperienceAboutMng />} />
        <Route path="/admin/about/books" element={<BookAboutMng />} />
        <Route path="/admin/about/profile-pdf" element={<ProfilePdfMng />} />
        {/* Branding Management */}
        <Route path="/admin/branding/faq" element={< FaqBrandingMng />} />
        <Route path="/admin/branding/steps" element={< StepsBrandingMng />} />
        <Route path="/admin/branding/trainers" element={< TrainersMng />} />
        {/* Training Management */}
        <Route path="/admin/training" element={<TrainingMng />} />
        {/* Blog Management */}
        <Route path="/admin/blog" element={<BlogMng />} />
        {/* Courses  Management*/}
        <Route path="/admin/courses" element={<CoursesMng />} />
        {/* Networks  Management */}
        <Route path="/admin/networks-playlist" element={<PlayListsMng />} />
      </Route>
    </Routes>
  );
};

export default index;
