import Section from "../../components/Section";
import { Title, LightText, MediumText } from "../../components/Typography";
import portrait from "../../assets/PortraitCropped.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./Hero.css";
const Hero = () => {
  return (
    <Section className="hero-container" backgroundColor="#C7E1FF">
      <div className="content-container">
        <div className="content">
          <div className="text-wrapper text-right">
            <MediumText>HI THERE!</MediumText>
            <Title>IT'S THANG.</Title>
            <LightText>
              Ex SDE Intern{" "}
              <span className="text-no-wrap">at <b>Amazon</b></span>
            </LightText>
            <LightText>
              CS student{" "}
              <span className="text-no-wrap">at <b>Carleton University</b></span>
            </LightText>
            <LightText>Tech & music lover a.k.a rock climber.</LightText>
          </div>

          <div className="image-container">
            <div className="image-cropper">
              <img className="image" alt="Portrait" src={portrait} />
            </div>
          </div>
        </div>

        <SocialLinks />
      </div>
    </Section>
  );
};

export default Hero;
