import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { styled } from "styled-components";
import numbersData from "../numbers-data";
import DropNumArea from "./DropNumArea";
import GenerateNumArea from "./GenerateNumArea";

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export default function Home() {
  const [initState, setInitState] = useState(numbersData);

  function handeOnDragEnd(result) {}

  return (
    <DragDropContext onDragEnd={handeOnDragEnd}>
      <Container>
        <GenerateNumArea
          key={initState.droppableAreas.genArea.id}
        ></GenerateNumArea>
        <DropNumArea key={initState.droppableAreas.dropArea.id}></DropNumArea>
      </Container>
    </DragDropContext>
  );
}
