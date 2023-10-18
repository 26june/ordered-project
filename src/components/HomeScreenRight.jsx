import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const RightContainer = styled.div`
  grid-column: 4/6;
  grid-row: 1/6;
  background-color: lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DroppableContainer = styled.div`
  height: 10%;
  width: 30%;

  background-color: ${({ $isDraggingOver }) =>
    $isDraggingOver ? "lightblue" : "white"};
`;

export default function HomeScreenRight({ generatedNumbers, listDropArea }) {
  return (
    <RightContainer>
      {listDropArea.generatedNumbersIds.map((numberId, index) => {
        return (
          <Droppable droppableId={index.toString()} key={index}>
            {(provided, snapshot) => (
              <DroppableContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
                $isDraggingOver={snapshot.isDraggingOver}
              >
                {generatedNumbers[numberId].content}
                {provided.placeholder}
              </DroppableContainer>
            )}
          </Droppable>
        );
      })}
    </RightContainer>
  );
}
