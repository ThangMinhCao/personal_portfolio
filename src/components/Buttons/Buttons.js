import "./Buttons.css"
import { useNavigate } from "react-router-dom";
import { AiFillStepBackward } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { LightFixed } from "../Typography";

const buttonIconSize = 20;

export const MusicButton = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/music")} className="back-home-button">
      <AiFillStepBackward fontSize={buttonIconSize} />
      <LightFixed className="back-home-button-text">MUSIC</LightFixed>
    </button>
  );
};

export const SoftwareButton = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="back-home-button">
      <FaComputer style={{ marginLeft: 7, marginRight: 10 }} fontSize={buttonIconSize} />
      <LightFixed className="back-home-button-text">SOFTWARE</LightFixed>
    </button>
  );
};
