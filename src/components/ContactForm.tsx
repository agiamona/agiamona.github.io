import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  min-height: 20em;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1em;
  margin-bottom: 1em;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 0.4em;
  font-family: "Roboto Slab", Arial, sans-serif;
`;

const SubmitButton = styled.input`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.foreground};
  border: 3px solid ${({ theme }) => theme.colors.foreground};
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  padding: 0.3em 1em;
  margin: auto;
  font-family: "Roboto Slab", Arial, sans-serif;

  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border: 3px solid ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.foreground};
    font-weight: bold;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 1em;
  font-size: 1em;
  padding 0.4em;
  font-family: "Roboto Slab", Arial, sans-serif;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders};
`;

export default function ContactForm(): JSX.Element {
  return (
    <Form>
      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Name*"
        required
      />
      <StyledInput
        type="email"
        id="email"
        name="email"
        placeholder="Email*"
        required
      />
      <StyledInput
        type="text"
        id="subject"
        name="subject"
        placeholder="Message Subject*"
        required
      />
      <TextArea
        id="message"
        name="message"
        rows={4}
        cols={50}
        required
        placeholder="Message*"
      />
      <SubmitButton type="submit" value="Submit" />
    </Form>
  );
}
