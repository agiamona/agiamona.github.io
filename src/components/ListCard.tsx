import React from "react";
import styled from "styled-components";
import List from "./List";

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight; 900;
  font-size: 1.2em;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  padding: 1em 0em;  
  margin-bottom: 1em;
`;

const CardBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.15em ${({ theme }) => theme.colors.shodows}
  );
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

interface ISkillCard {
  title: string;
  list: string[];
}

export default function SkillCard(props: ISkillCard): JSX.Element {
  const { title, list } = props;

  return (
    <CardBackground>
      <Heading>{title}</Heading>
      <CardBody>
        <List items={list} />
      </CardBody>
    </CardBackground>
  );
}
