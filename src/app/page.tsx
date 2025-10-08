import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import CoursesHome from "./components/CoursesHome";
import ScrollToTop from "./components/ScrollToTop";
import BlogHome from "./components/BlogHome";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CoursesHome />
      <Testimonials />
      {/* <Pricing /> */}
      <BlogHome />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
