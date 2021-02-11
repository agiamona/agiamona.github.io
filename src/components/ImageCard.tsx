import React, { useState } from "react";
import ImageCardMinimized from "./ImageCardMinimized";
import IProject from "./IProject";

export default function ProjectCard(props: { project: IProject }): JSX.Element {
  const [expand, setExpand] = useState(false);
  const { project } = props;

  const toggleExpand = (): void => {
    setExpand((prevState) => !prevState);
  };

  return <ImageCardMinimized project={project} onClick={toggleExpand} />;
}
