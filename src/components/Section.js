import styled from "styled-components";

const Section = styled.section`
  ${'' /* background: ${(props) => props.backgroundColor}; */}
  min-height: 100vh;
  scroll-snap-align: start;
  min-width: fit-content;
`

export default Section;