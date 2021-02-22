import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
`;

const LoadingContainer = styled.div`
  padding: 1em 2em;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};

  > svg {
    font-size: 4em;
    color: light-grey;
    animation-name: ${rotateAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export default function Loading(): JSX.Element {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={["fas", "circle-notch"]} />
    </LoadingContainer>
  );
}
