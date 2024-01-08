import "./Music.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";
import MusicHero from "./sections/Hero/Hero";
import Songs from "./sections/Songs/Songs";
import { ScrollRestoration } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Music() {
  const [ref, inView] = useInView({
    threshold: 0.015,
  });

  return (
    <div className="container music-container">
      <div className="button-bar music-button-bar">
        <SoftwareButton white withText={false} filled />
      </div>
      <MusicHero />
      {/* <NewRelease /> */}
      <Songs containerRef={ref} />
      <SocialLinks inverted={inView} white music position="right" fixed />
      <ScrollRestoration />
    </div>
  );
}

export default Music;
