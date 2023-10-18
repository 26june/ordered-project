import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;

  background-color: lightblue;
`;

export default function GenerateNumArea() {
  return <Container>GenerateNumArea</Container>;
}
