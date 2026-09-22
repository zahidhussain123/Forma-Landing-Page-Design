import React from "react";
import styled from "styled-components";
import photographer from "../images/gg3.png";
import MiniCard from "./MiniCard";

const Section = styled.section`
  padding: 88px 24px;
  background: #fffaf9;
  color: #242139;
  &, & * { box-sizing: border-box; }
  @media (max-width: 600px) { padding: 56px 18px; }
`;
const Layout = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.25fr);
  align-items: center;
  gap: 64px;
  @media (max-width: 1000px) { gap: 32px; }
  @media (max-width: 800px) { grid-template-columns: minmax(0, 1fr); gap: 36px; }
`;
const Visual = styled.figure`
  position: relative;
  isolation: isolate;
  height: 560px;
  margin: 0;
  overflow: hidden;
  border-radius: 120px 24px 24px 24px;
  background: linear-gradient(145deg, #fbdde5, #f29aae);
  &::before {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    top: 78px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #ffffff80;
    border-radius: 50%;
    box-shadow: 0 0 0 32px #ffffff14, 0 0 0 64px #ffffff10;
    z-index: -1;
  }
  @media (max-width: 800px) { height: 400px; max-width: 520px; width: 100%; margin: 0 auto; }
`;
const Image = styled.img`
  position: absolute;
  height: calc(100% + 100px);
  width: auto;
  max-width: none;
  bottom: -95px;
  left: 50%;
  transform: translateX(-50%);
`;
const Caption = styled.figcaption`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  padding: 20px 22px;
  background: #fffaf9;
  border-radius: 14px;
  box-shadow: 0 10px 30px #57263b14;
  small { display: block; color: #a62043; font-size: 11px; font-weight: bold; letter-spacing: 1.8px; text-transform: uppercase; margin-bottom: 7px; }
  p { font-size: 20px; line-height: 1.3; font-weight: bold; margin: 0; }
`;
const Content = styled.div`min-width: 0;`;
const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #b92049;
  margin: 0 0 16px;
  &::before { content: ""; width: 30px; height: 2px; background: currentColor; }
`;
const Title = styled.h2`
  font-size: clamp(34px, 3.5vw, 48px);
  line-height: 1.12;
  letter-spacing: -1.2px;
  margin: 0 0 18px;
  span { color: #bf224a; }
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #6d6576;
  margin: 0;
`;
const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 28px 0;
  @media (max-width: 480px) { grid-template-columns: minmax(0, 1fr); }
`;
const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 50px;
  padding: 14px 24px;
  border-radius: 9px;
  background: #bf224a;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  &:hover { background: #a51a3d; }
  &:focus-visible { outline: 3px solid #bf224a; outline-offset: 4px; }
  @media (max-width: 480px) { width: 100%; }
`;
const steps = [
  { number: "01", title: "Discover", description: "Define the audience, explore ideas, and set a clear direction." },
  { number: "02", title: "Design", description: "Bring the idea to life with thoughtful layouts, color, and typography." },
  { number: "03", title: "Refine", description: "Review the details and shape the design around feedback." },
  { number: "04", title: "Deliver", description: "Prepare a polished, consistent design for screens of every size." },
];

const Service = () => (
  <Section id="process" aria-labelledby="process-title">
    <Layout>
      <Visual>
        <Image src={photographer} alt="Photographer looking through a camera" loading="lazy" />
        <Caption><small>The creative approach</small><p>A fresh perspective.<br />A thoughtful result.</p></Caption>
      </Visual>
      <Content>
        <Eyebrow>The process</Eyebrow>
        <Title id="process-title">From a first idea to<br /><span>the final detail.</span></Title>
        <Description>Great design starts with a clear direction. Four thoughtful steps turn inspiration into a cohesive visual experience.</Description>
        <Steps>{steps.map((step) => <MiniCard key={step.number} {...step} />)}</Steps>
        <Link href="#contact">Let's talk design <span aria-hidden="true">↗</span></Link>
      </Content>
    </Layout>
  </Section>
);

export default Service;