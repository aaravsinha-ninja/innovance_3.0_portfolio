import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/globals/Navbar";
import Hero from "./components/main/Hero/Hero";
import { MyAdvantage } from "./components/main/MyAdvantage/MyAdvantage";
import EducationExperience from "./components/main/EducationExperience/EducationExperience";
import { LatestProjects } from "./components/main/LatestProjects/LatestProjects";
import { TestimonialCarousel } from "./components/main/Testimonials/TestimonialsCarousel";
import { TestimonialImage } from "./components/main/TestimonialImages/TestimonialImage";
import { CallBruno } from "./components/main/CallBruno/CallBruno";
import { Footer } from "./components/globals/Footer";
import Divider from "./components/main/Divider";
const App = () => {
  return (
    <div className="min-h-screen m-0 p-0">
      <Navbar />
      <Hero />
      <Divider />
      <MyAdvantage />
      <Divider />
      <EducationExperience />
      <Divider />
      {/* <LatestProjects /> */}
      {/* <BrunoQuote />
      <BrunoCarousel /> */}
      <TestimonialCarousel />

      <TestimonialImage />
  
      <CallBruno />
      <Footer />
    </div>
  );
};

export default App;
