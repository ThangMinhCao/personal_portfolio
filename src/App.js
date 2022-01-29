import "./App.css";
import Hero from "./sections/Hero/Hero";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Navigator from "./components/Navigator/Navigator";
import { useRef } from "react";
import useIntersection from "./hooks/useIntersection";

function App() {
  const refs = {
    heroRef: useRef(null),
    eduRef: useRef(null),
    expRef: useRef(null),
    projectRef: useRef(null),
  }

  const sectionVisibility = {
    heroVisible: useIntersection(refs.heroRef),
    eduVisible: useIntersection(refs.eduRef),
    expVisible: useIntersection(refs.expRef),
    projectVisible: useIntersection(refs.projectRef),
  }

  return (
    <div className="container">
      <Navigator
        refs={refs}
        visibility={sectionVisibility}
      />
      <Hero ref={refs.heroRef} />
      <Education ref={refs.eduRef} />
      <Experience ref={refs.expRef} />
      <Projects ref={refs.projectRef} />
    </div>
  );
}

export default App;
