import Section from "../../components/Section";
import { Title, LightText, MediumText } from "../../components/Typography";
import portrait from "../../assets/portraits/1.jpg";
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
              <span className="text-no-wrap">at <b>Amazon</b> & <b>Kinaxis</b></span>
            </LightText>
            <LightText>
              CS Student{" "}
              <span className="text-no-wrap">at <b>Carleton University</b></span>
            </LightText>
            <LightText>Tech + Music Lover & Rock Climber</LightText>
          </div>

          <div className="image-container">
            <div className="image-cropper float-hover">
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
