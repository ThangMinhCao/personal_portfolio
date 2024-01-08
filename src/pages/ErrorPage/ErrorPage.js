import { HomeSection } from "../../components/Section";
import {
  Title,
  LightText,
  MediumText,
} from "../../components/Typography";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";
import { MusicButton, SoftwareButton } from "../../components/Buttons/Buttons";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <HomeSection id="error-page">
      <div className="button-bar error-button-bar">
        <MusicButton white />
        <SoftwareButton white />
      </div>

      <Title>Oops!</Title>
      <LightText>Sorry, an unexpected error has occurred.</LightText>
      <MediumText style={{ marginTop: 25, fontStyle: "italic" }}>
        {error.statusText || error.message}
      </MediumText>

      <SocialLinks white />
      <span className="credit credit-error">Made by Minh Thang Cao</span>
    </HomeSection>
  );
};

export default ErrorPage;
