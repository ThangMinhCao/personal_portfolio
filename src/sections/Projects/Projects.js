import CardItem from "../../components/CardItem/CardItem";
import Section from "../../components/Section";
import { MediumText, Title } from "../../components/Typography";
import { info } from "../../data/itemInfo";
import "./Projects.css";

const Projects = () => {
  return (
    <Section className="project-container">
      <div className="project-list">
        {info.experiences.map(
          ({ company, logo, title, date, description }, index) =>
            <CardItem
              key={index}
              logo={logo}
              title={company}
              subtitle={title}
              date={date}
              description={description}
            />
        )}
      </div>

      <div className="project-title-container">
        <div className="top-space" />
        <div className="project-title">
          <MediumText>AND</MediumText>
          <Title>
            WHAT'VE
            <br />
            COME ALONG
          </Title>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
