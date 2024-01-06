import "./Home.css";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import { MusicButton } from "../../components/Buttons/Buttons";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="button-bar home-button-bar">
        <MusicButton withText={false} />
      </div>
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <ScrollRestoration />
    </div>
  );
}

export default Home;
