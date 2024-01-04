import "./SocialLinks.css";

const RESUME_LINK = "/thangcao-resume.pdf";
const LINKEDIN_LINK = "https://www.linkedin.com/in/minhthangcao/";
const GITHUB_LINK = "https://github.com/ThangMinhCao";
const YOUTUBE_LINK = "https://www.youtube.com/channel/UCOnu3R45EzDOCXdtMpD0mcQ";
const FACEBOOK_LINK = "https://www.facebook.com/thangcao20/";
const INSTAGRAM_LINK = "https://www.instagram.com/thang_cao_/";
const SPOTIFY_LINK = "https://open.spotify.com/artist/1vb60N1T2ZMzgJ7zj5FCXZ";
const SOUNDCLOUD_LINK = "https://soundcloud.com/thangmcao";

const SocialLinks = ({
  white = false,
  music = false,
  background = undefined,
  position = "centered",
  fixed = false,
}) => {
  return !music ? (
    <div
      className={`links ${white ? "white-icons" : ""} ${position}-links`}
      style={{ background: background ? background : "", position: fixed ? "fixed" : "absolute" }}
    >
      <a target="_blank" rel="noopener noreferrer" href={LINKEDIN_LINK}>
        <button className="icon-button linkedin-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={GITHUB_LINK}>
        <button className="icon-button github-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={RESUME_LINK}>
        <button className="icon-button resume-button" />
      </a>
    </div>
  ) : (
    <div
      className={`links ${white ? "white-icons" : ""} ${position}-links`}
      style={{ background: background ? background : "", position: fixed ? "fixed" : "absolute" }}
    >
      <a target="_blank" rel="noopener noreferrer" href={FACEBOOK_LINK}>
        <button className="icon-button facebook-button music-icon-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={INSTAGRAM_LINK}>
        <button className="icon-button instagram-button music-icon-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={YOUTUBE_LINK}>
        <button className="icon-button youtube-button music-icon-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={SPOTIFY_LINK}>
        <button className="icon-button spotify-button music-icon-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={SOUNDCLOUD_LINK}>
        <button className="icon-button soundcloud-button music-icon-button" />
      </a>
    </div>
  );
};

export default SocialLinks;
