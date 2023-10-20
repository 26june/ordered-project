import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  height: 100%;
  width: 100%;

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function WinCard() {
  return <Container>You Win!</Container>;
}
