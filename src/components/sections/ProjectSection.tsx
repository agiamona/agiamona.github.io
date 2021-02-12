import React from "react";
import Section from "../SectionComponent";
import ImageCard from "../ImageCard";
import { SubSectionContainer } from "../SectionStyles";

import IProject from "../IProject";

export default function ProjectSection(props: {
  projects: IProject[];
}): JSX.Element {
  const { projects } = props;

  const projectCards = projects.map(
    (project: IProject): JSX.Element => (
      <ImageCard project={project} key={project.title} />
    )
  );

  return (
    <Section title="Projects" id="projects">
      <SubSectionContainer>{projectCards}</SubSectionContainer>
    </Section>
  );
}
