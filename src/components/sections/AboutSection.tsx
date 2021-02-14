import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import Section from "../SectionComponent";

const StyledText = styled.p<{ mobile?: string }>`
  text-align: center;
  width: 60%;
  padding-bottom: 1em;
  margin: auto;

  ${(props) => props.mobile} {
    width: 80%;
  }
`;
StyledText.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

export default function About(props: { text: string[] }): JSX.Element {
  const { text } = props;
  const paragraphData = text.map((paragraph, index) => (
    <StyledText mobile={breakpoints.aboutMeMobile} key={index}>
      {paragraph}
    </StyledText>
  ));

  return (
    <Section title="About Me" id="about">
      {paragraphData}
    </Section>
  );
}
