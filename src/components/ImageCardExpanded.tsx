import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "./ExternalLink";
import {
  CardSubContainer,
  LargeThumbnail,
  Heading,
  CloseButton,
  Description,
  SubHeading,
} from "./ImageCardStyles";
import List from "./List";

import IProject from "./IProject";

export default function ImageCardExpanded(props: {
  project: IProject;
  onClick: () => void;
}): JSX.Element {
  const { project, onClick } = props;
  const {
    title,
    thumbnailAlt,
    thumbnail,
    liveSite,
    sourceCode,
    description,
    detailsList,
  } = project;

  return (
    <>
      <CloseButton onClick={onClick}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </CloseButton>
      <CardSubContainer centered>
        <LargeThumbnail alt={thumbnailAlt} src={thumbnail} />
        <div>
          {liveSite && liveSite.length > 0 ? (
            <ExternalLink url={liveSite} name="Live Site" />
          ) : null}
          {sourceCode && sourceCode.length > 0 ? (
            <ExternalLink url={sourceCode} name="Source Code" />
          ) : null}
        </div>
      </CardSubContainer>

      <CardSubContainer>
        <Heading>{title}</Heading>
        <SubHeading>Description</SubHeading>
        <Description>{description}</Description>
        <SubHeading>Details</SubHeading>
        {detailsList ? <List items={detailsList} narrow /> : null}
      </CardSubContainer>
    </>
  );
}
