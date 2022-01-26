import "./App.css";
// import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
