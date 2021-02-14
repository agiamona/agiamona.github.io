import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "./ExternalLink";
import {
  CardSubContainer,
  LargeThumbnail,
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
      <CloseButton onClick={onClick}>
        <FontAwesomeIcon icon="times" />
      </CloseButton>
      <CardSubContainer centered>
        <LargeThumbnail alt={thumbnailAlt} src={thumbnail} />
        <LinksContainer mobile={breakpoints.projectMobile}>
          {liveSite && liveSite.length > 0 ? (
            <ExternalLink url={liveSite} name="Live Site" />
          ) : null}
          {sourceCode && sourceCode.length > 0 ? (
            <ExternalLink url={sourceCode} name="Source Code" />
          ) : null}
        </LinksContainer>
      </CardSubContainer>

      <CardSubContainer>
        <Heading>{title}</Heading>
        <DateText>{dateString()}</DateText>
        <SubHeading>Description</SubHeading>
        <Description>{description}</Description>
        <SubHeading>Details</SubHeading>
        {detailsList ? <List items={detailsList} narrow /> : null}
      </CardSubContainer>
    </>
  );
}
