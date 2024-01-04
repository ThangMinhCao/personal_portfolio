import "./Home.css";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import { MusicButton } from "../../components/Buttons/Buttons";
import { FaAngleDoubleUp } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <div className="button-bar">
        <MusicButton withText={false} />
      </div>
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <div id="arrow-direction">
        <FaAngleDoubleUp id="arrow-icon" />
      </div>
    </div>
  );
}

export default Home;
