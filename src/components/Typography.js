import styled from "styled-components";

const bodySize = "0.5vw";
const titleSize = "3vw";
const subtitleSize = "45px";

export const LightText = styled.span`
  font-weight: 300;
  font-size: calc(25px + ${bodySize});
`;

export const MediumText = styled.span`
  font-weight: 500;
  font-size: ${bodySize};
`;

export const Subtitle = styled.span`
  font-weight: 500;
  font-style: italic;
  font-size: ${subtitleSize};
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: calc(40px + ${titleSize});
  letter-spacing: -0.03em;
`;