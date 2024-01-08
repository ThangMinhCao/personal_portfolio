import "./Hero.css";
import portrait from "../../../../assets/portraits/2.jpg";
import portraitTransparent from "../../../../assets/portraits/2-transparent.png";
import Section from "../../../../components/Section";
import { GiMusicalNotes } from "react-icons/gi";

function MusicHero() {
  return (
    <Section
      key="music-hero"
      className="music-hero-container"
    >
      {/* <div className="big-portrait-container transparent-portrait">
        <div className="big-portrait-cropper">
          <img className="image" alt="Portrait" src={portraitTransparent} />
        </div>
      </div> */}
      <div className="portrait-container big-portrait-container">
        <div className="big-portrait-cropper">
          <img className="image" alt="Portrait" src={portrait} />
        </div>
      </div>
      <div className="music-title music-font">
        <p id="its-word" className="music-font music-normal">
          It's another
        </p>
        <p id="name" className="music-font">
          THANG
          <GiMusicalNotes style={{ paddingLeft: 15, fontSize: 35 }} />
        </p>
        <p id="in-music-word" className="music-font"></p>
        <div style={{ marginLeft: 5 }} className="half-divider" />
      </div>
      {/* <div className="arrow-direction music-arrow">
        <FaAngleDoubleUp className="arrow-icon" />
      </div> */}
      {/* <div className="backdrop" /> */}
      {/* <div className="transparent-doodles" /> */}
    </Section>
  );
}

export default MusicHero;
