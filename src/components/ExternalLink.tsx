import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: bold;
  margin: 0 1em;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.foreground};
  }
  & sup {
    font-size: 0.7em;
  }
`;

export default function ExternalLink(props: {
  url: string;
  name: string;
}): JSX.Element {
  const { url, name } = props;

  return (
    <StyledLink href={url} target="_blank">
      {name}
      <sup>
        <FontAwesomeIcon icon="external-link-alt" />
      </sup>
    </StyledLink>
  );
}
