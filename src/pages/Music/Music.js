import "./Music.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";
import MusicHero from "./sections/Hero/Hero";
import NewRelease from "./sections/NewRelease/NewRelease";
import Songs from "./sections/Songs/Songs";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div id="music-background"/>
      <div className="button-bar music-button-bar">
        <SoftwareButton white withText={false} filled />
      </div>
      <MusicHero />
      <NewRelease />
      <Songs />
      <SocialLinks white music position="right" fixed />
      <ScrollRestoration />
    </div>
  );
}

export default Home;
