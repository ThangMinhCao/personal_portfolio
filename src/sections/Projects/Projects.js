import Section from "../../components/Section";
import { MediumText, Title } from "../../components/Typography";
import "./Projects.css";

const Projects = () => {
  return (
    <Section className="project-container">
      <div className="project-list"></div>

      <div className="project-title-container">
        <div className="top-space" />
        <div className="project-title">
          <MediumText>AND</MediumText>
          <Title>
            WHAT
            <br />
            COME
            <br />
            ALONG
          </Title>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
