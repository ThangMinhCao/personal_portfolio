import Section from "../../../../components/Section";
import CardItem from "../../../../components/CardItem/CardItem";
import { info } from "../../../../data/itemInfo";
import { Title, MediumText } from "../../../../components/Typography";
import "./Experience.css";

const Experience = () => {
  return (
    <Section className="experience-container">
      <div className="exp-title-container">
        <div className="exp-title">
          <Title>
            MY JOURNEY
          </Title>
          <MediumText>SO FAR</MediumText>
        </div>
      </div>
      <div className="timeline">
        {info.experiences.map(
          ({ company, logo, title, date, description }, index) =>
            <CardItem
              key={index}
              logo={logo}
              title={company}
              subtitle={title}
              date={date}
              description={description}
              // clickable
            />
        )}
      </div>
    </Section>
  );
};

export default Experience;
