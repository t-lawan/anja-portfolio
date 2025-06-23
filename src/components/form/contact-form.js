import React from "react";
import styled from "@emotion/styled";
import { navigate } from "gatsby";
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

  const handleSubmit = event => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .catch(error => console.log(error));
  };
  
  return (
    <FormContainer name="contact" method="POST" data-netlify="true" action="/xyz" onSubmit={handleSubmit} >
        <Input name="email" type="email" placeholder="email" />
        <Input name="name" type="text" placeholder="name" />
        <Input name="message" type="text" placeholder="message" />
        <Button type="submit">send</Button>

    </FormContainer>
  );
};

export default ContactForm;