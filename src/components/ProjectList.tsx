import React from "react";
import ImageCard from "./ImageCard";
import IProject from "./IProject";
import { SubSectionContainer } from "./SectionStyles";

export default function ProjectList(props: {
  projects: IProject[];
}): JSX.Element {
  const { projects } = props;

  const projectCards = projects.map(
    (project: IProject): JSX.Element => (
      <ImageCard project={project} key={project.title} />
    )
  );

  return <SubSectionContainer>{projectCards}</SubSectionContainer>;
}
