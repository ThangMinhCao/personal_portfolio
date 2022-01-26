import "./SocialLinks.css";

const LINKEDIN_LINK = "https://www.linkedin.com/in/minhthangcao/";
const GITHUB_LINK = "https://github.com/ThangMinhCao";
const GITLAB_LINK = "https://gitlab.com/ThangMinhCao";
const RESUME_LINK = "https://drive.google.com/file/d/1DNCR5e3j4j08TBcrqZ2wgBG60OpfBRNJ/view?usp=sharing";

const SocialLinks = () => {
  return (
    <div className="links">
      <a target="_blank" rel="noopener noreferrer" href={LINKEDIN_LINK}>
        <button className="icon-button linkedin-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={GITHUB_LINK}>
      <button className="icon-button github-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={GITLAB_LINK}>
        <button className="icon-button gitlab-button" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={RESUME_LINK}>
        <button className="icon-button resume-button" />
      </a>
    </div>
  );
}

export default SocialLinks;