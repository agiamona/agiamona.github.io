import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  min-height: 20em;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1em;
  margin-bottom: 1em;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 0.5em;
  font-family: "Roboto Slab", Arial, sans-serif;
  border-radius: 5px;
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
  width: 100%;

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
  padding 0.5em;
  font-family: "Roboto Slab", Arial, sans-serif;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 5px;
`;

type InputChangeType = React.ChangeEvent<HTMLInputElement>;
type TextareaChangeType = React.ChangeEvent<HTMLTextAreaElement>;

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm(props: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}): JSX.Element {
  const { onSubmit } = props;
  const intialformData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setformData] = useState<IForm>(intialformData);

  const handleChange = (e: InputChangeType | TextareaChangeType) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <Form
      onSubmit={onSubmit}
      action="https://formspree.io/f/mvovnpvj"
      method="POST"
    >
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Name*"
        aria-label="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email*"
        aria-label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject*"
        aria-label="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <TextArea
        id="message"
        name="message"
        rows={6}
        cols={50}
        placeholder="Message*"
        aria-label="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <SubmitButton
        type="submit"
        value="Submit"
        name="Submit"
        aria-label="Submit"
      />
    </Form>
  );
}
