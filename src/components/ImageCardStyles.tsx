import styled from "styled-components";

export const CardContainer = styled.div<{ expand: boolean }>`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.2em ${({ theme }) => theme.colors.shodows}
  );
  width: ${(props) => (props.expand ? "80vw" : "16em")};
  min-height: ${(props) => (props.expand ? "25em" : "14.5em")};
  padding: ${(props) => (props.expand ? "1.5em" : "0")};
  padding-bottom: 1.5em;
  cursor: ${(props) => (props.expand ? "auto" : "pointer")};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 1em;
  transition: all 0.1s ease-in;
`;

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
  top: 0.5em;
  right: 0.5em;
  font-size: 1.5em;
  z-index: 5000;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  padding: 0 1em;
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

export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 900;
  padding-bottom: 0.4em;
  text-align: left;
  width: 100%;
`;

export const SubHeading = styled.h4`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: 900;
  padding-bottom: 0.4em;
  text-align: left;
  width: 100%;
  margin-top: 1em;
`;

export const LargeThumbnail = styled.img`
  width: 90%;
`;

export const LinksContainer = styled.div`
  margin-top: 0.5em;
`;

export const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  padding-bottom: 0.4em;
  min-height: 3em;
`;

export const Thumbnail = styled.img`
  height: 9em;
  width: 16em;
`;
