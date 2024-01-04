import "./Music.css";
import Section from "../../components/Section";
import {
  Title,
  LightText,
  MediumText,
} from "../../components/Typography";
import portrait from "../../assets/portraits/2.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";

function Home() {
  return (
    <div className="container">
      <div className="button-bar music-button-bar">
        <SoftwareButton />
      </div>
      <div id="music-background" />
      <div className="content-container">
        <div className="content">
          <div className="image-container">
            <div className="music-image-cropper float-hover">
              <img className="image" alt="Portrait" src={portrait} />
            </div>
          </div>
          <div style={{flex: 1}}></div>
        </div>

        <SocialLinks white music />
      </div>
    </div>
  );
}

export default Home;
