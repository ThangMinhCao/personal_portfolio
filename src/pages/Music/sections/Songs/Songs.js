import "./Songs.css";
import Section from "../../../../components/Section";
import ReleaseCard from "../../../../components/ReleaseCard/ReleaseCard";
import BTDArtwork from "../../../../assets/album-covers/buc_thu_dau.jpg";
import VMYRArtwork from "../../../../assets/album-covers/vi_minh_yeu_roi.jpeg";

function Songs({ containerRef }) {
  const BTD_Link = "https://distrokid.com/hyperfollow/thangcao/bc-th-u-2";
  const VMYR_Link = "https://distrokid.com/hyperfollow/thangcao/v-mnh-yu-ri-11";

  return (
    <Section ref={containerRef} className="songs-container">
      <div className="songs-section-title">RELEASES</div>
      <div className="songs-content">
        <ReleaseCard
          img={BTDArtwork}
          name={"BỨC THƯ ĐẦU"}
          link={BTD_Link}
          releaseDate="02/12/2023"
        />
        <ReleaseCard
          img={VMYRArtwork}
          name={"VÌ MÌNH YÊU RỒI"}
          link={VMYR_Link}
          releaseDate="01/10/2021"
        />
      </div>
    </Section>
  );
}

export default Songs;
