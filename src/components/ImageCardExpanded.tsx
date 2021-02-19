import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "./ExternalLink";
import {
  CardSubContainer,
  Thumbnail,
  Heading,
  CloseButton,
  Description,
  SubHeading,
  LinksContainer,
  DateText,
} from "./ImageCardStyles";
import List from "./List";

import IProject from "./IProject";
import { breakpoints } from "../styles/breakpoints";

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
    dates,
    tech,
  } = project;

  const dateString = (): string => {
    if (!dates) {
      return "";
    }
    const { start, end } = dates;
    let result = "";

    if (start && end) {
      result = `${start} to ${end}`;
    } else if (start && !end) {
      result = `${start} to Present`;
    } else if (!start && end) {
      result = end;
    }

    return result;
  };

  return (
    <>
      <CloseButton aria-label="Close Project Details" onClick={onClick}>
        <FontAwesomeIcon icon="times" aria-hidden />
      </CloseButton>
      <CardSubContainer centered>
        <Thumbnail
          alt={thumbnailAlt}
          src={thumbnail}
          height="144"
          width="256"
          responsiveSize
        />
        <LinksContainer mobile={breakpoints.projectMobile}>
          {liveSite && liveSite.length > 0 ? (
            <ExternalLink url={liveSite} name="Visit Site" />
          ) : null}
          {sourceCode && sourceCode.length > 0 ? (
            <ExternalLink url={sourceCode} name="Source Code" />
          ) : null}
        </LinksContainer>
      </CardSubContainer>

      <CardSubContainer>
        <Heading>{title}</Heading>
        <DateText>{dateString()}</DateText>
        <SubHeading>Main Tech</SubHeading>
        <Description>{tech}</Description>
        <SubHeading>Description</SubHeading>
        <Description>{description}</Description>
        <SubHeading>Details</SubHeading>
        {detailsList ? <List items={detailsList} narrow /> : null}
      </CardSubContainer>
    </>
  );
}
