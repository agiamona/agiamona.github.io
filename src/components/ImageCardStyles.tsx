import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const CardContainer = styled.div<{ expand: boolean; columns?: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.15em ${({ theme }) => theme.colors.shodows}
  );
  width: ${(props) => (props.expand ? "80vw" : "16em")};
  min-height: ${(props) => (props.expand ? "25em" : "14.5em")};
  padding: ${(props) => (props.expand ? "1.5em" : "0")};
  padding-bottom: 1.5rem;
  cursor: ${(props) => (props.expand ? "auto" : "pointer")};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 1rem;

  ${(props) => props.columns} {
    flex-direction: column;
    padding-top: ${(props) => (props.expand ? "4em" : "0")};
    padding-bottom: ${(props) => (props.expand ? "4em" : "1.5em")};
  }

  & ${this} img {
    filter: ${(props) => (props.expand ? "none" : "brightness(1)")};
  }

  & :hover {
    & ${this} img {
      filter: ${(props) => (props.expand ? "none" : "brightness(1.5 )")};
    }
  }
`;

CardContainer.defaultProps = {
  columns: breakpoints.defaultNoMobile,
};

export const CardSubContainer = styled.div<{ centered?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.centered ? "center" : "flex-start")};
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
  z-index: 5000;
  cursor: pointer;
`;

export const DateText = styled.p`
  font-style: italic;
  font-size: 0.9rem;
  margin-top: -0.5rem;
`;

export const DetailsContainer = styled.div`
  padding: 0 1rem;
`;

export const Description = styled.p`
  text-align: left;
`;

export const ExpandIcon = styled.button`
  color: ${({ theme }) => theme.colors.foreground};
  background-color: transparent;
  border: none;
  float: right;
  text-align: right;
  font-size: 1.1rem;
  cursor: pointer;
  position: absolute;
  bottom: 0.25rem;
  right: 0.6rem;
  font-weight: bold;

  & ${this} svg {
    font-size: 1.2rem;
    position: relative;
    top: 0.12rem;
  }
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 900;
  padding-bottom: 0.4rem;
  text-align: left;
  width: 100%;
`;

export const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 900;
  padding-bottom: 0.4rem;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
`;

export const LinksContainer = styled.div<{ mobile: string }>`
  margin-top: 0.5rem;

  ${(props) => props.mobile} {
    padding-bottom: 1rem;
    text-align: center;
  }
`;

export const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  padding-bottom: 0.4rem;
  min-height: 3rem;
`;

export const Thumbnail = styled.img<{ bg: string; responsiveSize?: boolean }>`
  background: ${({ theme }) => theme.colors.background}
    url(${(props) => props.bg}) no-repeat center center;
  background-size: cover;
  border: solid 1px ${({ theme }) => theme.colors.borders};
  height: ${(props) => (props.responsiveSize ? "auto" : "9em")};
  width: ${(props) => (props.responsiveSize ? "90%" : "16em")};
`;

Thumbnail.defaultProps = {
  responsiveSize: false,
};
