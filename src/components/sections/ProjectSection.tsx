import React from "react";
import Section from "../SectionComponent";
import ProjectCard from "../ImageCard";
import { SubSectionContainer } from "../SectionStyles";

export default function ProjectSection(): JSX.Element {
  return (
    <Section title="Projects" id="projects">
      <SubSectionContainer>
        <ProjectCard />
      </SubSectionContainer>
    </Section>
  );
}
