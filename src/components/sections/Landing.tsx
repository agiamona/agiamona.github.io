import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/LandingPageBG.jpg";
import { breakpoints } from "../../styles/breakpoints";

const TitleHeading = styled.h2<{ mobile?: string }>`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 900;
  width: 60%;
  font-family: "Coda Caption", sans-serif;
  font-size: 2.9em;

  ${(props) => props.mobile} {
    width: 100%;
    font-size: 2.5em;
  }
`;

TitleHeading.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

const SubTitleHeading = styled.p<{ mobile?: string }>`
  color: ${({ theme }) => theme.colors.background};
  width: 60%;
  font-size: 1.3em;
  display: block;

  ${(props) => props.mobile} {
    width: 100%;
    font-size: 1.1em;
  }
`;

SubTitleHeading.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

const LandingContainer = styled.section<{ mobile?: string }>`
  background: ${({ theme }) => theme.colors.backgroundDominant}
    url(${BackgroundImage}) no-repeat top center fixed;
  min-height: 90vh;
  padding: 3em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${(props) => props.mobile} {
    padding: 4em 0em;
    padding-bottom: 6em;
  }
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
  margin-top: 4em;

  transition: all 0.1s ease-in;

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
    <LandingContainer mobile={breakpoints.landingMobile}>
      <TitleHeading mobile={breakpoints.landingMobile}>{title}</TitleHeading>
      <SubTitleHeading mobile={breakpoints.landingMobile}>
        {subtitle}
      </SubTitleHeading>
      <HollowLinkButton href="#about">Learn More</HollowLinkButton>
    </LandingContainer>
  );
}
