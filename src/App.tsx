// Main CSS
import "./App.css";

// Global Components
import {Navbar} from "./components/globals/Navbar";
import {Footer} from "./components/globals/Footer";
import {FadeEffect} from "./components/globals/FadeEffect";

// Main Components
import Hero from "./components/main/Hero/Hero";
import {MyAdvantage} from "./components/main/MyAdvantage/MyAdvantage";
import EducationExperience from "./components/main/EducationExperience/EducationExperience";
import {LatestProjects} from "./components/main/LatestProjects/LatestProjects";
import {TestimonialCarousel} from "./components/main/Testimonials/TestimonialsCarousel";
import TestimonialImage from "./components/main/TestimonialImages/TestimonialImage";
import {CallBruno} from "./components/main/CallBruno/CallBruno";
// import CustomCursor from "./components/globals/CustomCursor";

// Cursor Animation
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <div className="min-h-screen m-0 p-0">
            
            {/* Fix the lag of animated cursor */}
            <AnimatedCursor innerSize={8} outerSize={30} innerScale={1} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor: "", zIndex: 9999}} outerStyle={{border: "2px solid black"}} />
            {/* <CustomCursor /> */}
            {/* <AnimatedCursor innerSize={8} outerSize={30} innerScale={1} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor: "", zIndex: 9999}} outerStyle={{border: "2px solid black"}} /> */}
            <Navbar />

            <main>
                <Section component={<Hero />} />
                <Section component={<MyAdvantage />} />
                <Section component={<EducationExperience />} id="LatestProjects" />
                <Section component={<LatestProjects />} />
                <Section component={<TestimonialCarousel />} />
                <Section component={<TestimonialImage />} id="CallAlice" />
                <Section component={<CallBruno />} />
            </main>
            <Footer />
        </div>
    );
};

// Reusable Section Wrapper with FadeEffect
const Section = ({component, id}: any) => <FadeEffect id={id}>{component}</FadeEffect>;

export default App;
