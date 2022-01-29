import Section from "../../components/Section";
import { Title, LightText, MediumText } from "../../components/Typography";
import portrait from "../../assets/PortraitCropped.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./Hero.css";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
  return (
    <Section id="hero" ref={ref} className="hero-container" backgroundColor="#C7E1FF">
      <div className="content-container">
        <div className="content">
          <div className="text-wrapper text-right">
            <MediumText>HI THERE!</MediumText>
            <Title>IT'S THANG.</Title>
            <LightText>
              Third-year CS student{" "}
              <span className="text-no-wrap">at Carleton University</span>
            </LightText>
            <LightText>a.k.a tech and music lover.</LightText>
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
});

export default Hero;
