import "./Music.css";
import portrait from "../../assets/portraits/2.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { SoftwareButton } from "../../components/Buttons/Buttons";

const BTD_Link = "https://distrokid.com/hyperfollow/thangcao/bc-th-u-2"

function Home() {
  return (
    <div className="container">
      <div className="button-bar music-button-bar">
        <SoftwareButton white withText={false} filled />
        <div className="music-image-container">
          <div className="music-image-cropper float-hover">
            <img className="image" alt="Portrait" src={portrait} />
          </div>
        </div>
      </div>
      <div id="music-background" />
      <div className="music-content-container">
        {/* <TitleArtist className="artist-name">Thang Cao</TitleArtist> */}
        <div className="music-content">
          <div id="current-release">
            BỨC THƯ ĐẦU // <br/> Out Now
            <a target="_blank" rel="noopener noreferrer" href={BTD_Link}>
              <button className="listen-button">Listen</button>
            </a>
          </div>
        </div>

        <SocialLinks white music position="right" />
      </div>
    </div>
  );
}

export default Home;
