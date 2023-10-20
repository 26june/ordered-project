import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import numbersData from "../numbers-data";
import GeneratedNumber from "./GeneratedNumber";
import LoseCard from "./LoseCard";

let gameLost = false;

const LeftContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/6;
  transition: background-color 1s ease;
  background-color: ${() => (gameLost ? "#ff6961" : "#77dd77")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DroppableContainer = styled.div`
  height: 10vh;
  width: 20vw;

  border: 1px solid black;
`;

const RandomNumberButton = styled.div`
  height: 10vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  border: 1px solid red;
`;

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

export default function HomeScreenLeft({
  generatedNumbers,
  numGenArea,
  listDropArea,
  setInitState,
}) {
  function handleRestart() {
    gameLost = false;
    setInitState(numbersData);
  }

  let newNum = Math.floor(Math.random() * 99 + 1);

  function handleGenerateRandomNumber(e) {
    while (generatedNumbers.hasOwnProperty(newNum)) {
      newNum = Math.floor(Math.random() * 99 + 1);
    }

    let possibilityArray = [];

    listDropArea.generatedNumbersIds.forEach((currentId, index) => {
      if (currentId !== "0") {
        return;
      }

      const newIdArray = [...listDropArea.generatedNumbersIds];
      newIdArray[index] = `${newNum}`;

      const newFilteredIdArray = newIdArray.filter((e) => e !== "0");

      possibilityArray[index] = checkSorted(newFilteredIdArray);
    });

    if (possibilityArray.indexOf(true) === -1) {
      gameLost = true;
    }

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
    <>
      {gameLost ? <LoseCard></LoseCard> : null}
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
                    gameLost={gameLost}
                  ></GeneratedNumber>
                );
              })}

              {provided.placeholder}
            </DroppableContainer>
          )}
        </Droppable>

        <RandomNumberButton
          onClick={
            gameLost
              ? handleRestart
              : numGenArea.generatedNumbersIds.length === 0
              ? handleGenerateRandomNumber
              : null
          }
        >
          {gameLost ? "Restart" : "Generate"}
        </RandomNumberButton>
      </LeftContainer>
    </>
  );
}
