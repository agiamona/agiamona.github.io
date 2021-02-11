import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.2em ${({ theme }) => theme.colors.shodows}
  );
  width: 16em;
  min-height: 14.5em;
  padding-bottom: 1.5em;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  height: 9em;
  width: 16em;
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 900;
  padding-bottom: 0.4em;
`;

export const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  padding-bottom: 0.4em;
  min-height: 3em;
`;

export const DetailsContainer = styled.div`
  padding: 0 1em;
`;

export const ExpandIcon = styled.button`
  color: ${({ theme }) => theme.colors.foreground};
  background-color: transparent;
  border: none;
  float: right;
  text-align: right;
  font-size: 1.1em;
  cursor: pointer;
  position: absolute;
  bottom: 0.25em;
  right: 0.6em;
  font-weight: bold;

  & ${this} svg {
    font-size: 1.2em;
    position: relative;
    top: 0.12em;
  }
`;
