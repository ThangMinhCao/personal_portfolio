import "./CardItem.css";

const CardItem = ({ logo, title, subtitle, date, description }) => {
  return (
    <div className="card item">
      <div className="heading">
        <div className="logo-container">
          <img alt="Logo" src={logo} />
        </div>

        <div className="title-container">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          <p className="date">{date}</p>
        </div>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default CardItem;
