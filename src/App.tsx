import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "./components/globals/Navbar";
import {Hero} from "./components/main/Hero/Hero";
import {MyAdvantage} from "./components/main/MyAdvantage/MyAdvantage";
import {EducationExperience} from "./components/main/EducationExperience/EducationExperience";
import {LatestProjects} from "./components/main/LatestProjects/LatestProjects";
import {BrunoQuote} from "./components/main/BrunoQuote/BrunoQuote";
import {BrunoCarousel} from "./components/main/BrunoCarousel/BrunoCarousel";
import {CallBruno} from "./components/main/CallBruno/CallBruno";
import {Footer} from "./components/globals/Footer";

const App = () => {
    return (
        <div className="min-h-screen m-0 p-0">
            <Navbar />
            <Hero />
            <MyAdvantage />
            <EducationExperience />
            <LatestProjects />
            <BrunoQuote />
            <BrunoCarousel />
            <CallBruno />
            <Footer />
        </div>
    );
};

export default App;
