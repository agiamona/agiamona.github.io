import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight; 900;
  font-size: 1.2em;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  padding: 1em 0em;  
  margin-bottom: 1em;
`;

const CardBackground = styled.article`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: left;
  width: 17em;
  padding: 1em 3em;
  padding-bottom: 3em;
  text-align: center;
  border-radius: 10px;
  margin: 2em;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const ListContainer = styled.ul`
  list-style: none;
  text-align: left;
`;

const ListItem = styled.li`
  padding: 0.5em 0em;
  display: flex;
  align-items: flex-start;
`;

const BulletContainer = styled.span`
  padding-top: 0.03em;
  padding-right: 0.5em;
`;

interface ISkillCard {
  title: string;
  list: string[];
}

export default function SkillCard(props: ISkillCard): JSX.Element {
  const { title, list } = props;
  const listItems = list.map((skill, index) => (
    <ListItem key={index}>
      <BulletContainer>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </BulletContainer>
      {skill}
    </ListItem>
  ));

  return (
    <CardBackground>
      <Heading>{title}</Heading>
      <CardBody>
        <ListContainer>{listItems}</ListContainer>
      </CardBody>
    </CardBackground>
  );
}
