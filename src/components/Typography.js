import styled from "styled-components";

const bodySize = "calc(16px + 1.2vw)";
const lightFixed = "calc(18px)";
const titleSize = "calc(30px + 1.6vw)";
const subtitleSize = "calc(22px + 0.5vw)";

export const LightFixed = styled.span`
  font-weight: 300;
  font-size: ${lightFixed};
`;

export const LightText = styled.span`
  font-weight: 300;
  font-size: ${bodySize};
`;

export const MediumText = styled.span`
  font-weight: 500;
  font-size: ${bodySize};
  text-shadow: 3px 5px 8px rgba(0,0,0,0.2);
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
  text-shadow: 3px 5px 8px rgba(0,0,0,0.2);
`;
