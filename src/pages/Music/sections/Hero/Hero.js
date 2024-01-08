import "./Hero.css";
import portrait from "../../../../assets/portraits/2.jpg";
// import portraitTransparent from "../../../../assets/portraits/2-transparent.png";
import { MusicSection } from "../../../../components/Section";
import { GiMusicalNotes } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NewRelease from "../NewRelease/NewRelease";

function MusicHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1.5 0"],
  });
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 5.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, 5]);

  return (
    <MusicSection key="music-hero" className="music-hero-container">
      {/* <div className="big-portrait-container transparent-portrait">
        <div className="big-portrait-cropper">
          <img className="image" alt="Portrait" src={portraitTransparent} />
        </div>
      </div> */}
      <div className="portrait-container big-portrait-container">
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
        <div className="big-portrait-cropper">
          <img className="image" alt="Portrait" src={portrait} />
        </div>
        <motion.div className="doodles-overlay" style={{ scale: zoom }}>
          <div className="current-release-overlay"></div>
        </motion.div>

        <motion.div
          style={{
            position: "sticky",
            zIndex: 10,
            top: 0,
            opacity: opacity,
          }}
        >
          <NewRelease bgBlur={opacity} />
        </motion.div>
      </div>
      <div ref={ref} className="full-page-offset" />
    </MusicSection>
  );
}

export default MusicHero;
