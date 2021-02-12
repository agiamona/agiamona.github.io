import React from "react";
import { SectionHeader, SectionContainer } from "./SectionStyles";

interface SectionProps {
  title: string;
  transparent?: boolean;
  id?: string;
  children?: React.ReactChild | React.ReactChild[];
}

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
