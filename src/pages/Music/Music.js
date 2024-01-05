import "./Music.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";
import MusicHero from "./sections/Hero/Hero";
import NewRelease from "./sections/NewRelease/NewRelease";
import Songs from "./sections/Songs/Songs";
import { useInView } from 'react-intersection-observer';

function Home() {
  const { ref, inView } = useInView({ threshold: 0.35 });

  return (
    <div className="container">
      <div id="music-background" className={`${inView ? "blurred" : ""}`} />
      <div
        className={`button-bar music-button-bar ${inView ? "black-filled" : ""}`}
      >
        <SoftwareButton white withText={false} filled />
      </div>
      <MusicHero />
      <NewRelease />
      <Songs containerRef={ref}/>
      <SocialLinks white music position="right" fixed />
    </div>
  );
}

export default Home;
