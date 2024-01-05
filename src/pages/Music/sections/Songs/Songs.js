import "./Songs.css";
import Section from "../../../../components/Section";

function Songs({ containerRef }) {
  return (
    <Section ref={containerRef} className="songs-container">
      <div className="hero-content-container">
        <div className="music-content"></div>
      </div>
    </Section>
  );
}

export default Songs;
