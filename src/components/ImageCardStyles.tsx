import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.2em ${({ theme }) => theme.colors.shodows}
  );
  width: 16em;
  height: 16em;
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

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  padding-bottom: 0.4em;
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

  &:hover {
    border-bottom: solid 1px ${({ theme }) => theme.colors.shodows};
  }

  & ${this} svg {
    font-size: 1.2em;
    position: relative;
    top: 0.05em;
  }
`;
