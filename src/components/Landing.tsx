import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/LandingPageBG.jpg";

const TitleHeading = styled.h2`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 900;
  width: 60%;
  margin: auto;
  font-family: "Coda Caption", sans-serif;
  font-size: 3em;
`;
const SubTitleHeading = styled.p`
  color: ${({ theme }) => theme.colors.background};
  width: 60%;
  margin: auto;
  font-size: 1.3em;
`;
const LandingContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDominant}
    url(${BackgroundImage}) no-repeat top center fixed;
  padding: 15em 0em;
`;

export default function Landing(): JSX.Element {
  return (
    <LandingContainer>
      <TitleHeading>
        Software Engineer Specializing in Full Stack Web Development
      </TitleHeading>
      <SubTitleHeading>
        Passionate about crafting postive user experiences and solving problems
        through end-to-end solutions (frontend, backend, and hosting) with clean
        code that is maintainable, efficient, and well-tested.
      </SubTitleHeading>
      <a href="#About">Learn More</a>
    </LandingContainer>
  );
}
