import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-size: 3rem;
  background-color: lightgreen;
`;

export default function GeneratedNumber({ numberId, index, content }) {
  return (
    <Draggable draggableId={numberId} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
        </Container>
      )}
    </Draggable>
  );
}
