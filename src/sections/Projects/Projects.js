import CardItem from "../../components/CardItem/CardItem";
import Section from "../../components/Section";
import { MediumText, Title } from "../../components/Typography";
import { info } from "../../data/itemInfo";
import "./Projects.css";

const Projects = () => {
  return (
    <Section className="project-container">
      <div className="project-list">
        {info.projects.map(
          ({ title, subtitle, date, description, link }, index) =>
            <CardItem
              key={index}
              link={link}
              title={title}
              subtitle={subtitle}
              date={date}
              description={description}
            />
        )}
      </div>

      <div className="project-title-container">
        <div className="top-space" />
        <div className="project-title">
          <MediumText>AND</MediumText>
          <Title style={{ fontSize: "calc(40px + 1vw)" }}>
            WHAT'VE BEEN
            <br />
            GOING ALONG
          </Title>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
