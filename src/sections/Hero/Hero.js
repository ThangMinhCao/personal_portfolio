import Section from "../../components/Section"; 
import { Title, LightText } from "../../components/Typography";
import portrait from "../../assets/PortraitCropped.jpg";
import "./Hero.css";

const LINKEDIN_LINK = "https://www.linkedin.com/in/minhthangcao/";
const GITHUB_LINK = "https://github.com/ThangMinhCao";
const GITLAB_LINK = "https://gitlab.com/ThangMinhCao";
const RESUME_LINK = "https://drive.google.com/file/d/1DNCR5e3j4j08TBcrqZ2wgBG60OpfBRNJ/view?usp=sharing";

const Hero = () => {
  return (
    <Section backgroundColor="#C7E1FF">
      <div className="content-container">
        <div className="content">
          <div className="text-wrapper text-right">
            <Title>
              HI THERE!
            </Title>
            <Title>
              IT'S THANG.
            </Title>
            <LightText>
              Third-year Computer Science student
              <br/>
              at Carleton University a.k.a tech and music lover.
            </LightText>
          </div>

          <div className="image-container">
            <div className="image-cropper">
              <img className="image" alt="Portrait" src={portrait} />
            </div>
          </div>
        </div>
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
      </div>
    </Section>
  )
}

export default Hero;