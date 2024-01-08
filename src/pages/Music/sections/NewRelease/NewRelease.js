import { MusicSection } from "../../../../components/Section";
import "./NewRelease.css";

const BTD_Link = "https://distrokid.com/hyperfollow/thangcao/bc-th-u-2";

function NewRelease() {
  return (
    <MusicSection className="new-release-container">
      <div id="current-release">
        BỨC THƯ ĐẦU // <br /> Out Now
        <a target="_blank" rel="noopener noreferrer" href={BTD_Link}>
          <button className="listen-button">Listen</button>
        </a>
      </div>
    </MusicSection>
  );
}

export default NewRelease;
