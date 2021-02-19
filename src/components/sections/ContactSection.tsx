import React from "react";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import ContactForm from "../ContactForm";
import Section from "../SectionComponent";
import SocialMediaLinks from "../SocialMediaLinks";

const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(
    0.15em 0.25em 0.15em ${({ theme }) => theme.colors.shodows}
  );
  border-radius: 8px;
  padding: 2em 3rem;
  max-width: 40rem;
  min-height: 20rem;
  text-align: center;
  margin: auto;
`;

const FormIntro = styled.p`
  width: 80%;
  margin: auto;
  padding-bottom: 1rem;
`;

const FormIntroContainer = styled.div`
  text-align: center;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.borders};
  width: 100%;
  margin-bottom: 2rem;
`;

const OtherPlacesContainer = styled.div`
  margin-top: 3rem;
`;

const SubSection = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

enum FormResults {
  SUCCESS = "submissionSuccess",
  ERROR = "submissionError",
  NOT_SUBMITTED = "notSubmitted",
  SUBMITTING = "submitting",
}

interface IContactMessages {
  notSubmitted: string;
  submissionSuccess: string;
  submissionError: string;
  submitting: string;
}

const FORM_ID = "mvovnpvj";
export default function ContactSection(props: {
  contact: IContactMessages;
}): JSX.Element {
  const { SUCCESS, ERROR, NOT_SUBMITTED, SUBMITTING } = FormResults;
  const { contact } = props;
  const [state, handleSubmit] = useForm(FORM_ID);
  const { submitting, succeeded, errors } = state;

  const result = (): FormResults => {
    if (submitting) {
      return SUBMITTING;
    }
    if (succeeded) {
      return SUCCESS;
    }
    if (errors.length > 0) {
      return ERROR;
    }
    return NOT_SUBMITTED;
  };

  return (
    <Section title="Contact Me" id="contact" transparent>
      <FormContainer>
        <FormIntroContainer>
          <SubSection>Contact Form</SubSection>
          <FormIntro>{contact[result()]}</FormIntro>
        </FormIntroContainer>
        {result() === NOT_SUBMITTED ? (
          <ContactForm onSubmit={handleSubmit} />
        ) : null}
        <OtherPlacesContainer>
          <SubSection>You can also find me at the following places:</SubSection>
          <SocialMediaLinks />
        </OtherPlacesContainer>
      </FormContainer>
    </Section>
  );
}
