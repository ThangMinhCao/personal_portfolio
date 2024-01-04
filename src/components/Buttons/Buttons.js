import "./Buttons.css";
import { useNavigate } from "react-router-dom";
import { IoMusicalNotes } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { LightFixed } from "../Typography";

const buttonIconSize = 20;

export const MusicButton = ({
  onClick,
  white = false,
  withText = true,
  filled = false,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/music")}
      className="back-home-button"
      style={{
        color: white ? "white" : "black",
        border: `0.7px ${white ? "white" : "black"} solid`,
        background: filled ? (white ? "black" : "white") : "transparent",
      }}
    >
      <IoMusicalNotes fontSize={buttonIconSize} />
      {withText ? (
        <LightFixed className="back-home-button-text">MUSIC</LightFixed>
      ) : null}
    </button>
  );
};

export const SoftwareButton = ({
  onClick,
  white = false,
  withText = true,
  filled = false,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="back-home-button"
      style={{
        color: white ? "white" : "black",
        border: `0.7px ${white ? "white" : "black"} solid`,
        background: filled ? (white ? "#21212180" : "white") : "transparent",
      }}
    >
      <FaComputer fontSize={buttonIconSize} />
      {withText ? (
        <LightFixed style={{ marginLeft: 7 }} className="back-home-button-text">
          SOFTWARE
        </LightFixed>
      ) : null}
    </button>
  );
};
