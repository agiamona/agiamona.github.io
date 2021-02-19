import styled from "styled-components";

export const SubSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const SectionContainer = styled.article<{ transparent: boolean }>`
  background-color: ${({ transparent, theme }) =>
    transparent ? "transparent" : theme.colors.background};
  padding: 0 2rem;
  padding-bottom: 8rem;
`;

export const SectionHeader = styled.h2<{ transparent: boolean }>`
  color: ${({ theme, transparent }) =>
    transparent
      ? theme.colors.transparentSection.heading
      : theme.colors.solidSection.heading};
  padding: 1.5rem;
  padding-left: 3rem;
  border-bottom: 1.5px solid
    ${({ theme, transparent }) =>
      transparent
        ? theme.colors.transparentSection.borders
        : theme.colors.solidSection.borders};
  margin-bottom: 3rem;
`;
