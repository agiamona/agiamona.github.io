import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const TitleHeading = styled.h2<{ mobile?: string }>`
  text-shadow: 0 0 2px ${({ theme }) => theme.colors.textOutline},
    0 0 2px ${({ theme }) => theme.colors.textOutline},
    0 0 2px ${({ theme }) => theme.colors.textOutline},
    0 0 2px ${({ theme }) => theme.colors.textOutline};
  color: ${({ theme }) => theme.colors.transparentSection.heading};
  font-weight: 900;
  width: 60%;
  font-family: "Coda Caption", sans-serif;
  font-size: 2.9rem;

  ${(props) => props.mobile} {
    width: 100%;
    font-size: 2.5rem;
  }
`;

TitleHeading.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

const SubTitleHeading = styled.p<{ mobile?: string }>`
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.textOutline},
    0 0 4px ${({ theme }) => theme.colors.textOutline},
    0 0 4px ${({ theme }) => theme.colors.textOutline},
    0 0 4px ${({ theme }) => theme.colors.textOutline};
  color: ${({ theme }) => theme.colors.transparentSection.heading};
  width: 60%;
  font-size: 1.3rem;
  display: block;

  ${(props) => props.mobile} {
    width: 100%;
    font-size: 1.1rem;
  }
`;

SubTitleHeading.defaultProps = {
  mobile: breakpoints.defaultNoMobile,
};

const LandingContainer = styled.section<{ mobile?: string }>`
  background: ${({ theme }) => theme.colors.backgroundDominant}
    url(${({ theme }) => theme.colors.landingImage}) no-repeat top center fixed;
  min-height: 90vh;
  padding: 3em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  ${(props) => props.mobile} {
    padding: 4em 0rem;
    padding-bottom: 6rem;
  }
`;

const HollowLinkButton = styled.a`
  background-color: transparent;
  border: 3px solid
    ${({ theme }) => theme.colors.transparentSection.button.text};
  color: ${({ theme }) => theme.colors.transparentSection.button.text};
  font-weight: 900;
  padding: 0.5em 1.5rem;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-top: 4rem;

  transition: all 0.1s ease-in;

  &:visited {
    color: ${({ theme }) => theme.colors.transparentSection.button.text};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.solidSection.button.bg};
    border: 3px solid ${({ theme }) => theme.colors.solidSection.button.bg};
    color: ${({ theme }) => theme.colors.solidSection.button.text};
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
