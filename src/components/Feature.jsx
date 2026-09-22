import React from "react";
import styled from "styled-components";
import phoneImage from "../images/cc.png";

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 80px 24px;
  background: #fff;
  color: #242139;
  &, & * { box-sizing: border-box; }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(135deg, #fbdde5, #f8bdcc);
    clip-path: polygon(0 0, 49% 0, 36% 100%, 0 100%);
  }
  @media (max-width: 800px) {
    padding: 56px 18px;
    &::before { clip-path: none; height: 390px; }
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.25fr);
  align-items: center;
  gap: 64px;
  max-width: 1120px;
  margin: 0 auto;
  @media (max-width: 1000px) { gap: 32px; }
  @media (max-width: 800px) { grid-template-columns: minmax(0, 1fr); gap: 36px; }
`;
const Visual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
`;
const Image = styled.img`
  display: block;
  width: auto;
  height: 470px;
  max-width: 100%;
  object-fit: contain;
  filter: drop-shadow(12px 18px 18px #5b35451a);
  @media (max-width: 800px) { height: 320px; }
`;
const Content = styled.div`min-width: 0;`;
const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #b92049;
  &::before { content: ""; width: 30px; height: 2px; background: currentColor; }
`;
const Title = styled.h2`
  margin: 0 0 20px;
  font-size: clamp(34px, 3.5vw, 48px);
  line-height: 1.12;
  letter-spacing: -1.2px;
  span { color: #bf224a; }
`;
const SubTitle = styled.p`
  margin: 0 0 18px;
  font-size: 21px;
  line-height: 1.5;
  color: #423a50;
`;
const Description = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: 18px;
  line-height: 1.65;
  color: #6d6576;
`;
const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 50px;
  margin-top: 28px;
  padding: 14px 24px;
  border-radius: 9px;
  background: #bf224a;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  &:hover { background: #a51a3d; }
  &:focus-visible { outline: 3px solid #bf224a; outline-offset: 4px; }
  @media (max-width: 480px) { width: 100%; }
`;

const Feature = () => (
  <Section id="features" aria-labelledby="feature-title">
    <Layout>
      <Visual>
        <Image src={phoneImage} alt="A hand holding a phone displaying an hourglass" loading="lazy" />
      </Visual>
      <Content>
        <Eyebrow>Thoughtful by design</Eyebrow>
        <Title id="feature-title">A strong start.<br /><span>A lasting impression.</span></Title>
        <SubTitle>Good design begins with a clear idea.</SubTitle>
        <Description>From the first headline to the smallest detail, Forma explores how thoughtful typography, balanced layouts, and a cohesive color palette can bring an idea to life.</Description>
        <Link href="#process">Explore the process <span aria-hidden="true">↗</span></Link>
      </Content>
    </Layout>
  </Section>
);

export default Feature;