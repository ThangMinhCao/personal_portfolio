import "./App.css";
import { Title } from "./components/Typography";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import Experiences from "./sections/Experiences/Experiences";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
