import "./Home.css";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import { MusicButton } from "../../components/Buttons/Buttons";

function Home() {
  return (
    <div className="container">
      {/* <div className="button-bar home-button-bar">
        <MusicButton />
      </div> */}
      <Hero />
      <Education />
      <Experience />
      <Projects  />
    </div>
  );
}

export default Home;
