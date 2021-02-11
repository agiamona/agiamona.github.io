import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IProject from "./IProject";

import {
  CardContainer,
  Thumbnail,
  DetailsContainer,
  Heading,
  Tagline,
  ExpandIcon,
} from "./ImageCardStyles";

export default function ImageCardMinimized(props: {
  project: IProject;
  onClick: () => void;
}): JSX.Element {
  const { project, onClick } = props;
  const { title, tagline, thumbnail, thumbnailAlt } = project;

  return (
    <CardContainer onClick={onClick}>
      <Thumbnail alt={thumbnailAlt} src={thumbnail} />
      <DetailsContainer>
        <Heading>{title}</Heading>
        <Tagline>{tagline}</Tagline>
        <ExpandIcon onClick={onClick}>
          More <FontAwesomeIcon icon={faAngleRight} />
        </ExpandIcon>
      </DetailsContainer>
    </CardContainer>
  );
}
