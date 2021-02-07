import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section<{ transparent: boolean }>`
  background-color: ${({ transparent, theme }) =>
    transparent ? "transparent" : theme.colors.background};
  padding: 0 2em;
  padding-bottom: 8em;
`;

const SectionHeader = styled.h2<{ transparent: boolean }>`
  color: ${({ theme, transparent }) =>
    transparent ? theme.colors.background : theme.colors.foreground};
  padding: 1.5em;
  padding-left: 3em;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  margin-bottom: 3em;
`;

type SectionProps = {
  title: string;
  transparent?: boolean;
  id?: string;
  children?: React.ReactChild | React.ReactChild[];
};

export default function Section(props: SectionProps): JSX.Element {
  const { id, title, children, transparent } = props;
  return (
    <SectionContainer id={id} transparent={!!transparent}>
      <SectionHeader transparent={!!transparent}>{title}</SectionHeader>
      {children}
    </SectionContainer>
  );
}

Section.defaultProps = {
  id: "",
  transparent: false,
  children: null,
};
