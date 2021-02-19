import React from "react";
import styled from "styled-components";
import List from "./List";

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight; 900;
  font-size: 1.2rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  padding: 1em 0rem;  
  margin-bottom: 1rem;
`;

const CardBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.15em ${({ theme }) => theme.colors.shodows}
  );
  text-align: left;
  width: 17rem;
  padding: 1em 3rem;
  padding-bottom: 3rem;
  text-align: center;
  border-radius: 10px;
  margin: 2rem;
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
