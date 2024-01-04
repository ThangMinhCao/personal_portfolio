import "./Music.css";
import portrait from "../../assets/portraits/2.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";

function Home() {
  return (
    <div className="container">
      <div className="button-bar music-button-bar">
        <SoftwareButton white withText={false} />
      </div>
      <div id="music-background" />
      <div className="music-content-container">
        <div className="music-content">
          <div className="music-image-container">
            <div className="music-image-cropper float-hover">
              <img className="image" alt="Portrait" src={portrait} />
            </div>
          </div>
        </div>

        <SocialLinks white music />
      </div>
    </div>
  );
}

export default Home;
