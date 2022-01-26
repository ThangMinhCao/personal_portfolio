import "./App.css";
// import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experiences from "./sections/Experiences/Experiences";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Hero />
      <Education />
      <Experiences />
      <Projects />
    </div>
  );
}

export default App;
