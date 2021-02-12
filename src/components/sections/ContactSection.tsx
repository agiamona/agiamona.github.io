import React from "react";
import styled from "styled-components";
import ContactForm from "../ContactForm";
import Section from "../SectionComponent";
import SocialMediaLinks from "../SocialMediaLinks";

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 2em 3em;
  max-width: 40em;
  min-height: 20em;
  text-align: center;
  margin: auto;
`;

const FormIntro = styled.p`
  width: 80%;
  margin: auto;
  padding-bottom: 1em;
`;

const FormIntroContainer = styled.div`
  text-align: center;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  width: 100%;
  margin-bottom: 2em;
`;

const SubSection = styled.h5`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1em;
  margin-top: 3em;
  font-size: 1.2em;
`;

export default function ContactSection(props: { text: string }): JSX.Element {
  const { text } = props;

  return (
    <Section title="Contact Me" id="contact" transparent>
      <FormContainer>
        <FormIntroContainer>
          <FormIntro>{text}</FormIntro>
        </FormIntroContainer>
        <ContactForm />
        <SubSection>You can also find me at the following places:</SubSection>
        <SocialMediaLinks />
      </FormContainer>
    </Section>
  );
}
