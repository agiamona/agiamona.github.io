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
  padding: 0 2em;
  padding-bottom: 8em;
`;

export const SectionHeader = styled.h2<{ transparent: boolean }>`
  color: ${({ theme, transparent }) =>
    transparent ? theme.colors.background : theme.colors.foreground};
  padding: 1.5em;
  padding-left: 3em;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  margin-bottom: 3em;
`;
