import React from "react";
import styled from "styled-components";
import Section from "./Section";

const StyledP = styled.p`
  text-align: center;
  width: 60%;
  padding-bottom: 1em;
  margin: auto;
`;

export default function About(props: { text: string[] }): JSX.Element {
  const { text } = props;
  const paragraphData = text.map((paragraph, index) => (
    <StyledP key={index}>{paragraph}</StyledP>
  ));

  return (
    <Section title="About Me" id="about">
      {paragraphData}
    </Section>
  );
}
