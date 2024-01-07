import Section from "../../../../components/Section";
import "./NewRelease.css";

const BTD_Link = "https://distrokid.com/hyperfollow/thangcao/bc-th-u-2";

function NewRelease() {
  return (
    <Section className="new-release-container">
      <div id="music-background" />
      <div id="current-release">
        BỨC THƯ ĐẦU // <br /> Out Now
        <a target="_blank" rel="noopener noreferrer" href={BTD_Link}>
          <button className="listen-button">Listen</button>
        </a>
      </div>
    </Section>
  );
}

export default NewRelease;
