import React from "react";
import Section from "../SectionComponent";
import ProjectCard from "../ImageCard";
import { SubSectionContainer } from "../SectionStyles";

import IProject from "../IProject";

export default function ProjectSection(props: { projects: IProject[] }): JSX.Element {
  const { projects } = props;

  const projectCards = projects.map(
    (project: IProject): JSX.Element => <ProjectCard project={project} />
  );

  return (
    <Section title="Projects" id="projects">
      <SubSectionContainer>{projectCards}</SubSectionContainer>
    </Section>
  );
}
