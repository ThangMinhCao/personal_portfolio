import styled from "styled-components";

const bodySize = "65px";
const titleSize = "120px";
const subtitleSize = "55px";

export const LightText = styled.span`
  font-weight: 300;
  font-size: ${bodySize}
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

export const Title = styled.span`
  font-weight: 900;
  font-size: ${titleSize};
  letter-spacing: -0.04em;
`;