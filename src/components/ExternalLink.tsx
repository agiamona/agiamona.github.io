import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakpoints } from "../styles/breakpoints";

const StyledLink = styled.a<{ mobile: string }>`
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

  ${(props) => props.mobile} {
    display: block;
    padding-bottom: 1em;
  }
`;

export default function ExternalLink(props: {
  url: string;
  name: string;
}): JSX.Element {
  const { url, name } = props;

  return (
    <StyledLink
      mobile={breakpoints.projectMiniMobile}
      href={url}
      target="_blank"
    >
      {name}
      <sup>
        <FontAwesomeIcon icon="external-link-alt" />
      </sup>
    </StyledLink>
  );
}
