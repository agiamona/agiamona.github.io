import React from "react";
import styled from "styled-components";
import Section from "./Section";
import SkillCard from "./SkillCard";

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

interface ISkill {
  category: string;
  list: string[];
}

export default function SkillSection(props: { skills: ISkill[] }): JSX.Element {
  const { skills } = props;
  const skillCards = skills.map((skill, index) => (
    <SkillCard title={skill.category} list={skill.list} key={index} />
  ));

  return (
    <Section title="Skills" id="skills" transparent>
      <SkillsContainer>{skillCards}</SkillsContainer>
    </Section>
  );
}
