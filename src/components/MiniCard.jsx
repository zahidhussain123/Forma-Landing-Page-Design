import React from "react";
import styled from "styled-components";

const Card = styled.li`
  padding: 22px;
  border: 1px solid #eee3e8;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 5px 16px #4c234305;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;
const Number = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #fcebf0;
  color: #b92049;
  font-size: 12px;
  font-weight: bold;
`;
const Title = styled.h3`font-size: 19px; line-height: 1.3; margin: 0;`;
const Description = styled.p`font-size: 15px; line-height: 1.6; color: #6d6576; margin: 0;`;

const MiniCard = ({ number, title, description }) => (
  <Card>
    <Heading><Number aria-hidden="true">{number}</Number><Title>{title}</Title></Heading>
    <Description>{description}</Description>
  </Card>
);

export default MiniCard;