import styled from "styled-components";

const bodySize = "calc(20px + 1vw)";
const titleSize = "calc(45px + 1.5vw)";
const subtitleSize = "calc(22px + 0.5vw)";

export const LightText = styled.span`
  font-weight: 300;
  font-size: ${bodySize};
`;

export const MediumText = styled.span`
  font-weight: 500;
  font-size: ${bodySize};
`;

export const Subtitle = styled.span`
  font-weight: 500;
  font-style: italic;
  font-size: ${subtitleSize};
  margin-bottom: 10px;
  text-decoration: underline;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${titleSize};
  letter-spacing: -0.03em;
`;
