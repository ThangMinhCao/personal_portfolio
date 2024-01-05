import "./Hero.css";
import portrait from "../../../../assets/portraits/2.jpg";
import Section from "../../../../components/Section";
// import { useInView } from "react-intersection-observer";

function MusicHero() {
  // const { ref, inView, entry } = useInView({ threshold: 0 });

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
          It's
        </p>
        <p id="name" className="music-font">
          THANG CAO
        </p>
        <p id="making-music-word" className="music-font music-normal">
          making music
        </p>
      </div>
    </Section>
  );
}

export default MusicHero;
