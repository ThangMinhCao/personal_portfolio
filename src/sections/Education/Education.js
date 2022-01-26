import Section from "../../components/Section"; 
import { Title, Subtitle, LightText, MediumText } from "../../components/Typography";
import carletonLogo from "../../assets/carleton_logo.jpg";
import "./Education.css";

const Education = () => {
  return (
    <Section backgroundColor="#FFC7C7">
        <div className="content-container">
          <div className="content">
            <div className="image-container">
              <div className="image-cropper">
                <img className="image" alt="Carleton_Logo" src={carletonLogo} />
              </div>
            </div>

            <div className="text-wrapper text-left">
              <Title>
                Carleton University
              </Title>
              <Subtitle>
                From 09/2019 - 05/2023 (Expected)
              </Subtitle>
              <LightText>
                Bachelor's Degree of Computer Science,
                <br/>
                Co-operative Education
                <br/>
                <br/>
                GPA: {<MediumText>11.75/12 (A+)</MediumText>}
                <br/>
                On Dean's Honour List since 2019
              </LightText>
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Education;