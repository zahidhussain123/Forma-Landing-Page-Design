import React from "react";
import styled, { css } from "styled-components";

const Container = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 88px 24px;
  color: #242139;
  background: radial-gradient(ellipse at 5% 15%, #fbdde5, transparent 48%),
    radial-gradient(ellipse at 100% 90%, #e4dff6, transparent 45%), #fff8f8;
  &, & * { box-sizing: border-box; }
  &::before, &::after {
    content: ""; position: absolute; z-index: -1; width: 360px; height: 360px;
    border: 1px solid #be608226; border-radius: 50%; pointer-events: none;
  }
  &::before { top: -210px; right: 10%; box-shadow: 0 0 0 48px #efb6c414; }
  &::after { bottom: -250px; left: -100px; width: 500px; height: 500px; }
  @media (max-width: 600px) { padding: 56px 18px; }
`;
const Wrapper = styled.div`max-width: 1120px; margin: 0 auto;`;
const Eyebrow = styled.p`
  color: #b92049; font-size: 12px; font-weight: bold; letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 12px;
  &::before { content: ""; width: 30px; height: 2px; background: currentColor; }
`;
const Title = styled.h2`
  font-size: clamp(36px, 4.5vw, 56px); line-height: 1.08; letter-spacing: -1.5px;
  margin: 0 0 18px; span { color: #c52651; }
`;
const Description = styled.p`
  font-size: 18px; line-height: 1.6; color: #6d6576; max-width: 540px; margin: 0 0 36px;
`;
const Card = styled.div`
  display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  border: 1px solid #fff; border-radius: 24px; overflow: hidden; background: white;
  box-shadow: 0 24px 70px -24px #4c234338;
  @media (max-width: 800px) { grid-template-columns: minmax(0, 1fr); }
`;
const Form = styled.form`
  padding: 40px;
  h3 { font-size: 24px; margin: 0 0 26px; }
  @media (max-width: 600px) { padding: 28px 22px; }
`;
const Fields = styled.div`
  display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px;
  @media (max-width: 600px) { grid-template-columns: minmax(0, 1fr); }
`;
const Field = styled.label`
  display: flex; flex-direction: column; gap: 9px; font-size: 14px; font-weight: bold;
  grid-column: ${({ $full }) => $full ? "1 / -1" : "auto"};
`;
const control = css`
  width: 100%; min-width: 0; padding: 14px 16px; border: 1px solid #e6e1e8;
  border-radius: 9px; background: #fcfbfd; color: #242139; font: inherit;
  font-size: 16px; font-weight: normal; transition: border-color 150ms, box-shadow 150ms;
  &::placeholder { color: #827989; opacity: 1; }
  &:focus { outline: none; border-color: #b92049; box-shadow: 0 0 0 3px #b9204914; }
`;
const Input = styled.input`${control}`;
const TextArea = styled.textarea`${control} min-height: 122px; resize: vertical;`;
const Button = styled.button`
  display: flex; align-items: center; justify-content: center; gap: 14px;
  margin-top: 24px; min-height: 50px; padding: 14px 24px; border: none;
  border-radius: 9px; background: #bf224a; color: white; font-size: 16px;
  font-weight: bold; cursor: pointer; box-shadow: 0 6px 16px #bf224a24;
  &:hover { background: #a51a3d; }
  &:focus-visible { outline: 3px solid #bf224a; outline-offset: 4px; }
  @media (max-width: 600px) { width: 100%; }
`;
const Note = styled.p`margin-top: 12px; color: #756d7c; font-size: 13px; line-height: 1.5;`;
const ContactPanel = styled.aside`
  position: relative; overflow: hidden; padding: 42px 36px;
  background: linear-gradient(145deg, #29243f, #211d33); color: white;
  h3 { font-size: 26px; margin: 0 0 12px; }
  > p { color: #c9c3d6; line-height: 1.6; font-size: 16px; max-width: 280px; }
  &::after {
    content: ""; position: absolute; width: 230px; height: 230px;
    right: -110px; bottom: -155px; border: 1px solid #f391ab50; border-radius: 50%;
    box-shadow: 0 0 0 35px #f391ab08, 0 0 0 70px #f391ab06; pointer-events: none;
  }
  @media (max-width: 600px) { padding: 32px 22px; }
`;
const ContactList = styled.address`
  display: flex; flex-direction: column; gap: 28px; margin-top: 34px; font-style: normal;
`;
const ContactItem = styled.div`
  display: flex; align-items: flex-start; gap: 16px;
  > div { min-width: 0; }
  h4 { font-size: 12px; color: #e3a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px; }
  p, a { color: #f4f0f8; font-size: 16px; line-height: 1.65; overflow-wrap: anywhere; }
  a { display: block; text-decoration: none; }
  a:hover { color: #ffc4d5; text-decoration: underline; }
  a:focus-visible { outline: 2px solid #ffc4d5; outline-offset: 4px; }
`;
const IconBox = styled.span`
  display: grid; place-items: center; flex-shrink: 0; width: 42px; height: 42px;
  border: 1px solid #ffffff14; border-radius: 12px; background: #ffffff08; color: #f3a1b8;
`;
const ContactIcon = ({ type }) => (
  <IconBox aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {type === "location" ? <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></> : type === "phone" ? <path d="m7 3 3 5-3 2c1.5 3 3 4.5 6 6l2-3 5 3c1 1-1 5-3 5C10 21 3 14 3 7c0-2 3-5 4-4Z" /> : <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>}
    </svg>
  </IconBox>
);

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`;
    window.location.href = `mailto:zahid4307@gmail.com?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
  };
  return (
    <Container id="contact" aria-labelledby="contact-title">
      <Wrapper>
        <Eyebrow>Let's talk</Eyebrow>
        <Title id="contact-title">Questions? <span>Let's get in touch.</span></Title>
        <Description>Have an idea in mind or a question for us? We'd love to hear from you. Let's make something great together.</Description>
        <Card>
          <Form onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <Fields>
              <Field>Your name<Input name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} /></Field>
              <Field>Email address<Input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></Field>
              <Field $full>Subject<Input name="subject" placeholder="What would you like to discuss?" required maxLength={200} /></Field>
              <Field $full>Message<TextArea name="message" placeholder="Tell us a little about your idea…" required maxLength={3000} /></Field>
            </Fields>
            <Button type="submit">Let's talk <span aria-hidden="true">↗</span></Button>
            <Note>Opens your email app with your message ready to send.</Note>
          </Form>
          <ContactPanel aria-labelledby="contact-details-title">
            <h3 id="contact-details-title">A conversation away.</h3>
            <p>Prefer to reach out directly? Find us here.</p>
            <ContactList>
              <ContactItem><ContactIcon type="location" /><div><h4>Visit us</h4><p>Police Line, H-10<br />Islamic IIUI, Islamabad</p></div></ContactItem>
              <ContactItem><ContactIcon type="phone" /><div><h4>Call us</h4><a href="tel:+923059488689">+92 305 9488689</a><a href="tel:+923355615732">+92 335 5615732</a></div></ContactItem>
              <ContactItem><ContactIcon type="email" /><div><h4>Email us</h4><a href="mailto:zahid4307@gmail.com">zahid4307@gmail.com</a><a href="mailto:zaid345@gmail.com">zaid345@gmail.com</a></div></ContactItem>
            </ContactList>
          </ContactPanel>
        </Card>
      </Wrapper>
    </Container>
  );
};
export default Contact;
