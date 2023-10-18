import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import GeneratedNumber from "./GeneratedNumber";

const LeftContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;
  background-color: lightyellow;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DroppableContainer = styled.div`
  height: 10%;
  width: 30%;

  background-color: lightpink;
`;

export default function HomeScreenLeft({ generatedNumbers, numGenArea }) {
  return (
    <LeftContainer>
      <Droppable droppableId={numGenArea.id}>
        {(provided, snapshot) => (
          <DroppableContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {numGenArea.generatedNumbersIds.map((numberId, index) => {
              return (
                <GeneratedNumber
                  key={numberId}
                  numberId={numberId}
                  index={index}
                ></GeneratedNumber>
              );
            })}

            {provided.placeholder}
          </DroppableContainer>
        )}
      </Droppable>
    </LeftContainer>
  );
}
