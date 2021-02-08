import React, { useState } from "react";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CardContainer,
  Thumbnail,
  DetailsContainer,
  Heading,
  Description,
  ExpandIcon,
} from "./ImageCardStyles";

export default function ProjectCard(): JSX.Element {
  const [expand, setExpand] = useState(false);

  const toggleExpand = (): void => {
    setExpand((prevState) => !prevState);
  };

  return (
    <CardContainer onClick={toggleExpand}>
      <Thumbnail
        alt="Project A Screenshot"
        src="https://res.cloudinary.com/amaranthnebula/image/upload/v1612760106/portfolio/placeholder.png"
      />
      <DetailsContainer>
        <Heading>Lorem</Heading>
        <Description>Vitae, justo, nullam, and dictum</Description>
        <ExpandIcon onClick={toggleExpand}>
          Learn More <FontAwesomeIcon icon={faChevronCircleRight} />
        </ExpandIcon>
      </DetailsContainer>
    </CardContainer>
  );
}
