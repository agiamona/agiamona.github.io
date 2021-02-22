import React from "react";
import Section from "../SectionComponent";
import SkillCard from "../ListCard";
import Loading from "../Loading";

const SubSectionContainers = React.lazy(() =>
  import("../SectionStyles").then(({ SubSectionContainer }) => ({
    default: SubSectionContainer,
  }))
);

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
      <React.Suspense fallback={<Loading />}>
        <SubSectionContainers>{skillCards}</SubSectionContainers>
      </React.Suspense>
    </Section>
  );
}
