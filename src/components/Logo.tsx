import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: right;
  font-weight: bold;
  font-size: 1.9em;
  padding: 0em 0.5em;
  z-index: 500;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "Exo 2", sans-serif;
`;

export default function Logo(): JSX.Element {
  return (
    <StyledHeading>
      <Link href="/">
        Ashley Elena
        <br />
        Giamona
      </Link>
    </StyledHeading>
  );
}
