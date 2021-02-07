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
  padding: 10em 0em;
  padding-bottom: 13em;
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

interface ILanding {
  title: string;
  subtitle: string;
}
export default function Landing(props: ILanding): JSX.Element {
  const { title, subtitle } = props;

  return (
    <LandingContainer>
      <TitleHeading>{title}</TitleHeading>
      <SubTitleHeading>{subtitle}</SubTitleHeading>
      <HollowLinkButton href="#about">Learn More</HollowLinkButton>
    </LandingContainer>
  );
}
