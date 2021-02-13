import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLinkItems, ILink } from "../assets/NavigationData";

const SocialLink = styled.a`
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.foreground};
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2em;
  padding: 0.25em 0.5em;
  transition: all 0.1s ease-in;
  margin: 0.5em;

  &:visited {
    color: ${({ theme }) => theme.colors.background};
  }
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.foreground};
  }

  & svg {
    margin-right: 0.3em;
  }
`;

const SocialMediaLinksContainer = styled.div`
  width: 100%;
  padding: 0 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`;

export default function SocialMediaLinks(): JSX.Element {
  const links = SocialLinkItems.map((item: ILink) => (
    <SocialLink href={item.href} target="_blank" key={item.href}>
      {item.icon ? <FontAwesomeIcon icon={item.icon} /> : null}
      {item.title}
    </SocialLink>
  ));
  return <SocialMediaLinksContainer>{links}</SocialMediaLinksContainer>;
}
