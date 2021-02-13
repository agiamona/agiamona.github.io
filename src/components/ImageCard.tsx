import React, { useState, useRef, useEffect } from "react";
import { CardContainer } from "./ImageCardStyles";
import ImageCardMinimized from "./ImageCardMinimized";
import ImageCardExpanded from "./ImageCardExpanded";
import IProject from "./IProject";

export default function ImageCard(props: { project: IProject }): JSX.Element {
  const [expand, setExpand] = useState(false);
  const { project } = props;

  const toggleExpand = (): void => {
    setExpand(!expand);
  };

  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (expand && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  const expandedCard = (
    <ImageCardExpanded project={project} onClick={toggleExpand} />
  );
  const minimizedCard = (
    <ImageCardMinimized project={project} onClick={toggleExpand} />
  );

  return (
    <CardContainer
      ref={cardRef}
      onClick={expand ? undefined : toggleExpand}
      expand={expand}
    >
      {expand ? expandedCard : minimizedCard}
    </CardContainer>
  );
}
