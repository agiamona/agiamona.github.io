import React from "react";
import styled from "styled-components";
import { THEMES } from "../styles/themes";

const Toggle = styled.label``;

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

  return (
    <Toggle htmlFor="modeToggle">
      <input
        type="checkbox"
        id="modeToggle"
        checked={current === THEMES.DARK}
        onChange={onToggle}
      />
      Dark
    </Toggle>
  );
}
