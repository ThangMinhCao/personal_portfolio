import "./CardItem.css";
import { BsCodeSlash } from "react-icons/bs";

const CardItem = ({ logo, title, subtitle, date, description, technologies, link }) => {
  const openLink = (e) => {
    e.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <div className="card item">
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

        {
          !link ? null : (
            <button className="code-button" onClick={openLink}>
              <BsCodeSlash />
            </button>
          )
        }
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default CardItem;
