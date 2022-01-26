import Section from "../../components/Section"; 
import { Title, LightText } from "../../components/Typography";
import portrait from "../../assets/PortraitCropped.jpg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./Hero.css";

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

        <SocialLinks />
      </div>
    </Section>
  )
}

export default Hero;