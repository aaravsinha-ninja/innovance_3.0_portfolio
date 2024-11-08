import "./App.css";
import {Navbar} from "./components/globals/Navbar";
import Hero from "./components/main/Hero/Hero";
import {MyAdvantage} from "./components/main/MyAdvantage/MyAdvantage";
import EducationExperience from "./components/main/EducationExperience/EducationExperience";
import {LatestProjects} from "./components/main/LatestProjects/LatestProjects";
import {TestimonialCarousel} from "./components/main/Testimonials/TestimonialsCarousel";
import {CallBruno} from "./components/main/CallBruno/CallBruno";
import {Footer} from "./components/globals/Footer";
import {FadeEffect} from "./components/globals/FadeEffect";
import TestimonialImage from "./components/main/TestimonialImages/TestimonialImage";
// import CustomCursor from "./components/globals/CustomCursor";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
    return (
        <div className="min-h-screen m-0 p-0">
            
            {/* Fix the lag of animated cursor */}
            <AnimatedCursor innerSize={8} outerSize={30} innerScale={1} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor: "", zIndex: 9999}} outerStyle={{border: "2px solid black"}} />
            {/* <CustomCursor /> */}
            <Navbar />

            <FadeEffect>
                <Hero />
            </FadeEffect>

            <FadeEffect>
                <MyAdvantage />
            </FadeEffect>

            <FadeEffect>
                <EducationExperience />
            </FadeEffect>

            <FadeEffect id="LatestProjects">
                <LatestProjects />
            </FadeEffect>

            <FadeEffect>
                <TestimonialCarousel />
            </FadeEffect>

            <FadeEffect>
                <TestimonialImage />
            </FadeEffect>

            <FadeEffect id="CallAlice">
                <CallBruno />
            </FadeEffect>

            <FadeEffect>
                <Footer />
            </FadeEffect>
        </div>
    );
};

export default App;
