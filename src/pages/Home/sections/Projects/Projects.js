import CardItem from "../../../../components/CardItem/CardItem";
import Section from "../../../../components/Section";
import SocialLinks from "../../../../components/SocialLinks/SocialLinks";
import { MediumText, Title } from "../../../../components/Typography";
import { info } from "../../../../data/itemInfo";
import "./Projects.css";

const Projects = () => {
  return (
    <Section className="project-container">
      <div className="main-projects-container">
        <div className="project-list">
          {info.projects.map(
            ({ title, subtitle, date, description, link, technologies }, index) =>
              <CardItem
                key={index}
                link={link}
                title={title}
                subtitle={subtitle}
                date={date}
                description={description}
                technologies={technologies}
              />
          )}
        </div>

        <div className="project-title-container">
          <div className="top-space" />
          <div className="project-title">
            <MediumText>AND</MediumText>
            <Title>
              WHAT'VE BEEN
              <br />
              GOING ALONG
            </Title>
          </div>
        </div>
      </div>
      <SocialLinks white />
      <span className="credit">Made by Minh Thang Cao</span>
    </Section>
  );
};

export default Projects;
