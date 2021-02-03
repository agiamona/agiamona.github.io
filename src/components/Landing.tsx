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
  display: block;
`;
const LandingContainer = styled.section`
  background: ${({ theme }) => theme.colors.backgroundDominant}
    url(${BackgroundImage}) no-repeat top center fixed;
  padding: 15em 0em;
  text-align: center;
`;

const HollowLinkButton = styled.a`
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 900;
  padding: 0.5em 1.5em;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.2em;
  position: relative;
  top: 5em;

  &:visited {
    color: ${({ theme }) => theme.colors.background};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
  }
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
      <HollowLinkButton href="#About">Learn More</HollowLinkButton>
    </LandingContainer>
  );
}
