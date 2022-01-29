import { Link } from "react-scroll";
import "./Navigator.css";

const Navigator = ({ refs, visibility }) => {
  // const { heroRef, eduRef, expRef, projectRef } = refs;
  // const { heroVisible, eduVisible, expVisible, projectVisible } = visibility;

  return (
    <div className="navigator-container">
      {/* <button
        className={`nav-btn ${heroVisible ? "nav-active" : ""}`}
        onClick={() => heroRef.current.scrollIntoView()}
      />
      <button
        className={`nav-btn ${eduVisible ? "nav-active" : ""}`}
        onClick={() => eduRef.current.scrollIntoView()}
      />
      <button
        className={`nav-btn ${expVisible ? "nav-active" : ""}`}
        onClick={() => expRef.current.scrollIntoView()}
      />
      <button
        className={`nav-btn ${projectVisible ? "nav-active" : ""}`}
        onClick={() => projectRef.current.scrollIntoView()}
      /> */}

      {/* <Link to="projects" smooth={true} spy={true} duration={500}>Projects</Link> */}
    </div>
  );
};

export default Navigator;
