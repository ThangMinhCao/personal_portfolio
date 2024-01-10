import "./Hero.css";
import portrait from "../../../../assets/portraits/2.jpg";
import { MusicSection } from "../../../../components/Section";
import { GiMusicalNotes } from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NewRelease from "../NewRelease/NewRelease";
import BTDArtwork from "../../../../assets/backgrounds/buc_thu_dau.jpeg";
import BWBackground from "../../../../assets/portraits/2-sketch.png";
import { useWillChange } from "framer-motion";

function MusicHero() {
  const willChange = useWillChange();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "2.2 0"],
  });
  const { scrollYProgress: yProg2 } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });
  const { scrollYProgress: yProg3 } = useScroll({
    target: ref,
    offset: ["0.35 1", "0 0"],
  });
  const zoom = useTransform(scrollYProgress, [0, 0.15, 1], [1, 1, 3.5]);
  const zoom2 = useTransform(scrollYProgress, [0, 0.15, 1], [0.01, 0.05, 5.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.83, 1], [0, 0, 5]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0.015, 0.3, 0.4, 0.6, 1, 0.9, 1, 0.9, 1, 0.9, 1]
  );
  const opacity3 = useTransform(yProg3, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const opacity4 = useTransform(yProg2, [0, 0.8, 1], [1, 1, 0]);

  return (
    <MusicSection key="music-hero" className="music-hero-container">
      <div className="portrait-container big-portrait-container">
        <div className="big-portrait-cropper">
          <img className="image" alt="Portrait" src={portrait} />
        </div>
        <div className="overlay-container">
          <motion.div
            className="new-release-overlay-container"
            style={{ scale: zoom2, willChange }}
          >
            <img
              className="new-release-overlay"
              src={BTDArtwork}
              alt="BTD Artwork"
            />
          </motion.div>
          <motion.div
            className="doodles-overlay"
            style={{ scale: zoom, opacity: opacity2, willChange }}
          />
          <div className="bw-background-container">
            <img
              className="bw-background image"
              src={BWBackground}
              alt="BTD Artwork"
            />
          </div>
        </div>

        <motion.div
          style={{
            position: "sticky",
            zIndex: 10,
            top: 0,
            opacity: opacity,
            willChange,
          }}
        >
          <NewRelease bgBlur={opacity} />
        </motion.div>
      </div>
      <motion.div
        className="music-title music-font"
        style={{ opacity: opacity4 }}
      >
        <p id="its-word" className="music-font music-normal">
          It's another
        </p>
        <p id="name" className="music-font">
          THANG
        </p>
        <p id="in-music-word" className="music-font"></p>
        <div style={{ marginLeft: 5 }} className="half-divider" />
      </motion.div>
      <motion.div
        className="music-title second-page music-font"
        style={{ opacity: opacity3, willChange }}
      >
        <p className="music-font">
          who
          <br />
          makes
          <br />
          music
          <GiMusicalNotes style={{ fontSize: 20, marginLeft: 15 }} />
        </p>
        <p id="in-music-word" className="music-font"></p>
      </motion.div>
      <div ref={ref} className="full-page-offset" />
    </MusicSection>
  );
}

export default MusicHero;
