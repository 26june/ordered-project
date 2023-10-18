import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  grid-column: 4/6;
  grid-row: 1/6;

  background-color: lightgreen;
`;

export default function DropNumArea() {
  return <Container>DropNumArea</Container>;
}
