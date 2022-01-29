import "./SocialLinks.css";

const RESUME_LINK = "/MinhThangCao_Resume.pdf";
const LINKEDIN_LINK = "https://www.linkedin.com/in/minhthangcao/";
const GITHUB_LINK = "https://github.com/ThangMinhCao";
const GITLAB_LINK = "https://gitlab.com/ThangMinhCao";

const SocialLinks = ({ white=false }) => {
  return (
    <div className={`links ${white ? "white-icons" : ""}`}>
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