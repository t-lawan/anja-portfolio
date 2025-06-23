import React, { useState } from "react";
import styled from "@emotion/styled";
import { size } from "../../index.styles";


const ContactFormWrapper = styled.div`
  width: 100%;
   height: 100%;
  display: flex;
  flex-direction: column;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  
  `;


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
  margin: 0.5rem 0;
  padding: 0.5rem;
  width:50%;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  @media only screen and (max-width: ${size.tablet}) {
   width:80%;
  } 
`;

const Textarea = styled.textarea`
  background: transparent;
  border: none;
  color: white;
  border-bottom: 1px solid white;
  outline: none;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width:50%;
    @media only screen and (max-width: ${size.tablet}) {
   width:80%;
  } 

`;

const Button = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    color: #ddd;
    font-style: italic;
    animation: long-shadow 1.5s ease-in-out;
  }
`;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch(error => console.log(error));
  };

  return (
    <ContactFormWrapper>
      {!isSubmitted ? (
        <FormContainer name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} >
          <input type="hidden" name="form-name" value="contact" />
          <Input name="email" type="email" placeholder="email" />
          <Input name="name" type="text" placeholder="name" />
          <Textarea name="message" type="text" placeholder="message" maxLength={1000} />
          <Button type="submit">send</Button>
        </FormContainer>
      ) : <p> thanks, i'll get back to you.</p>}

    </ContactFormWrapper>

  );
};

export default ContactForm;