import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: sans-serif;
  background: transparent;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid white;
  color: white;
  margin: 10px 0;
  padding: 5px;
  width: 200px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  text-transform: uppercase;

  &:hover {
    color: #ddd;
  }
`;

const ContactForm = () => {
  return (
    <FormContainer name="contact" method="POST" data-netlify="true" action="/xyz">
        <Input name="email" type="text" placeholder="email" />
        <Input name="name" type="text" placeholder="name" />
        <Input name="message" type="text" placeholder="message" />
        <Button type="submit">send</Button>

    </FormContainer>
  );
};

export default ContactForm;