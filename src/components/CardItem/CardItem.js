import { useState } from "react";
import "./CardItem.css";
import { BsCodeSlash } from "react-icons/bs";
import { languageColors, frameworks } from "../../data/techData";

const CardItem = ({
  logo,
  title,
  subtitle,
  date,
  description,
  technologies,
  link,
  clickable = false
}) => {
  const [collapsed, setCollapsed] = useState(true);

  const openLink = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  const renderTechItem = (
    content,
    isLanguage,
    key,
    background = "none",
    textColor = "white"
  ) => (
    <div
      style={{ backgroundColor: background, color: textColor }}
      className="tech-item"
      key={key}
    >
      {!isLanguage ? (
        <img src={frameworks[content]} alt="Tech Logo" />
      ) : (
        content
      )}
    </div>
  );

  return (
    <div className="card item" style={clickable ? { cursor: "pointer" } : {}} onClick={() => setCollapsed(!collapsed)}>
      <div className="heading">
        {!logo ? null : (
          <div className="logo-container">
            <img alt="Logo" src={logo} />
          </div>
        )}

        <div className="title-container">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="date">{date}</p>
        </div>

        {!link ? null : (
          <button className="code-button" onClick={openLink}>
            <BsCodeSlash />
          </button>
        )}
      </div>

      {
        collapsed && clickable
        ? null
        : <p className="description">{description}</p>
      }

      {!technologies ? null : (
        <div className="tech-stack-container">
          {technologies.languages.map((language, index) =>
            renderTechItem(
              language,
              true,
              `l${index}`,
              languageColors[language].background,
              languageColors[language].text
            )
          )}
          {technologies.frameworks.map((framework, index) =>
            renderTechItem(framework, false, `l${index}`)
          )}
        </div>
      )}
    </div>
  );
};

export default CardItem;
