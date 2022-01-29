import { LightText } from "../Typography";
import "./Navigator.css";

const Navigator = ({ refs, visibility }) => {
  const { heroRef, eduRef, expRef, projectRef } = refs;
  const { heroVisible, eduVisible, expVisible, projectVisible } = visibility;

  return (
    <nav className="navigator-container">
      <a className="nav-link" href="#hero">WELCOME!</a>
      <a className="nav-link" href="#education">EDUCATION</a>
      <a className="nav-link" href="#experience">EXPERIENCE</a>
      <a className="nav-link" href="#projects">PROJECTS</a>
      {/* <a className="nav-link" href="#hero">welcome!</a>
      <a className="nav-link" href="#education">education</a>
      <a className="nav-link" href="#experience">experience</a>
      <a className="nav-link" href="#projects">projects</a> */}
      {/* <a
        className={`nav-btn ${eduVisible ? "nav-active" : ""}`}
        onClick={() => eduRef.current.scrollIntoView()}
      />
      <a
        className={`nav-btn ${expVisible ? "nav-active" : ""}`}
        onClick={() => expRef.current.scrollIntoView()}
      />
      <a
        className={`nav-btn ${projectVisible ? "nav-active" : ""}`}
        onClick={() => projectRef.current.scrollIntoView()}
      /> */}
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
    </nav>
  );
};

export default Navigator;
