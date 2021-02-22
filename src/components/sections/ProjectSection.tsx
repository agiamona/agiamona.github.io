import React from "react";
import Section from "../SectionComponent";
import IProject from "../IProject";
import Loading from "../Loading";

const ProjectList = React.lazy(() => import("../ProjectList"));

export default function ProjectSection(props: {
  projects: IProject[];
}): JSX.Element {
  const { projects } = props;

  return (
    <Section title="Projects" id="projects">
      <React.Suspense fallback={<Loading />}>
        <ProjectList projects={projects} />
      </React.Suspense>
    </Section>
  );
}
