import React from "react";
import Section from "../SectionComponent";
import { SubSectionContainer } from "../SectionStyles";
import SkillCard from "../ListCard";

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
      <SubSectionContainer>{skillCards}</SubSectionContainer>
    </Section>
  );
}
