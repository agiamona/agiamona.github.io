import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import Section from "../SectionComponent";

const StyledText = styled.p<{ mobile?: string }>`
  text-align: left;
  width: 60%;
  padding-bottom: 1rem;
  margin: auto;

  ${(props) => props.mobile} {
    width: 100%;
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
