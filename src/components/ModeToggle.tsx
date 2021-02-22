import React from "react";
import styled from "styled-components";
import { THEMES } from "../styles/themes";

const Toggle = styled.label`
  border: 0.18rem solid ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  padding: 0.15rem;
  padding-right 1rem;
  cursor: pointer;
  margin: auto;
  display: inline-block;

  > p {
    position: relative;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.background};
    padding: 0.1rem 0.8rem;
    border-radius: 6px;
    display: inline-block;
    transition: 0.3s;
  }

  > input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  > input:checked + p {
    left: 0.8rem;
  }
`;

interface IModeToggle {
  theme: {
    current: THEMES;
    onToggle: () => void;
  };
}
export default function ModeToggle(props: IModeToggle): JSX.Element {
  const {
    theme: { current, onToggle },
  } = props;

  const toggleLabel = current === THEMES.DARK ? "Dark" : "Light";

  return (
    <Toggle htmlFor="modeToggle">
      <input
        type="checkbox"
        id="modeToggle"
        checked={current === THEMES.DARK}
        onChange={onToggle}
      />
      <p>{toggleLabel}</p>
    </Toggle>
  );
}
