import React from "react";
import { styled } from "styled-components";

const RightContainer = styled.div`
  grid-column: 4/6;
  grid-row: 1/6;
  background-color: lightblue;
`;

const DroppableContainer = styled.div`
  height: 10%;
  width: 30%;

  background-color: lightpink;
`;

export default function HomeScreenRight() {
  return <RightContainer></RightContainer>;
}
