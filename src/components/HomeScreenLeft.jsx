import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import GeneratedNumber from "./GeneratedNumber";

const LeftContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;
  background-color: lightyellow;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DroppableContainer = styled.div`
  height: 10%;
  width: 30%;

  background-color: lightpink;
`;

const RandomNumberButton = styled.div`
  height: 10%;
  width: 30%;

  background-color: red;
`;

export default function HomeScreenLeft({
  generatedNumbers,
  numGenArea,
  setInitState,
}) {

  
  let newNum = Math.floor(Math.random() * 99 + 1);

  function handleGenerateRandomNumber(e) {
    setInitState((current) => {
      const newGeneratedNumbers = {
        ...current.generatedNumbers,
        [newNum]: { id: `${newNum}`, content: `${newNum}` },
      };

      const newNumgenArea = {
        ...current.myDroppableAreas.numGenArea,
        generatedNumbersIds: [`${newNum}`],
      };

      const newDroppableArea = {
        ...current.myDroppableAreas,
        numGenArea: newNumgenArea,
      };

      return {
        ...current,
        generatedNumbers: newGeneratedNumbers,
        myDroppableAreas: newDroppableArea,
      };
    });
  }

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
                  content={generatedNumbers[numberId].content}
                ></GeneratedNumber>
              );
            })}

            {provided.placeholder}
          </DroppableContainer>
        )}
      </Droppable>

      <RandomNumberButton
        onClick={handleGenerateRandomNumber}
      ></RandomNumberButton>
    </LeftContainer>
  );
}
