import React from "react";
import { styled } from "styled-components";

const LeftContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;
  background-color: lightyellow;
`;

export default function HomeScreenLeft() {
  return <LeftContainer></LeftContainer>;
}
