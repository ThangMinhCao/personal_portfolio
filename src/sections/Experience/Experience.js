import Section from "../../components/Section";
import CardItem from "../../components/CardItem/CardItem";
import { info } from "../../data/itemInfo";
import "./Experience.css";

const Experience = () => {
  return (
    <Section className="experience-container">
      <div className="timeline">
        {info.experiences.map(
          ({ company, logo, title, date, description }) =>
            <CardItem
              logo={logo}
              title={company}
              subtitle={title}
              date={date}
              description={description}
            />
        )}
      </div>
    </Section>
  );
};

export default Experience;
