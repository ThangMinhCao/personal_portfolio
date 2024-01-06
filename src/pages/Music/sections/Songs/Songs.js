import "./Songs.css";
import Section from "../../../../components/Section";

function Songs({ containerRef }) {
  return (
    <Section ref={containerRef} className="songs-container">
      <div className="songs-section-title">RELEASES</div>
      <div className="music-content"></div>
    </Section>
  );
}

export default Songs;
