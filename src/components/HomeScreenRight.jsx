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

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DroppableContainer = styled.div`
  height: 10vh;
  width: 20vw;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 1s ease;
  font-size: 2rem;
  background-color: ${({ $isDraggingOver }) =>
    $isDraggingOver ? "lightpink" : "white"};
`;

export default function HomeScreenRight({ generatedNumbers, listDropArea }) {
  return (
    <RightContainer>
      {listDropArea.generatedNumbersIds.map((numberId, index) => {
        return (
          <Droppable
            droppableId={index.toString()}
            key={index}
            isDropDisabled={
              generatedNumbers[numberId].content === "" ? false : true
            }
          >
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
