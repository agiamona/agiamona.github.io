import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  display: inline-block;
  font-family: "Coda Caption", sans-serif;
  text-align: right;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 0em 0.5rem;
  z-index: 500;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
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
