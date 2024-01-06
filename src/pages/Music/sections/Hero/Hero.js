import "./Hero.css";
import portrait from "../../../../assets/portraits/2.jpg";
import Section from "../../../../components/Section";
import { FaAngleDoubleUp } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";

function MusicHero() {
  return (
    <Section className="music-hero-container">
      <div className="backdrop" />
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
      </div>
      <div className="arrow-direction music-arrow">
        <FaAngleDoubleUp className="arrow-icon" />
      </div>
    </Section>
  );
}

export default MusicHero;
