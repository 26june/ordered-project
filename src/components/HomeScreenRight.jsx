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

export default function HomeScreenRight({
  generatedNumbers,
  listDropArea,
  currentNum,
}) {
  function checkSortedRight(arr) {
    return arr.every(
      (value, index, array) => index === 0 || value >= array[index - 1]
    );
  }

  let possibilityArrayRight = [];

  listDropArea.generatedNumbersIds.forEach((currentId, index) => {
    if (currentId !== "0") {
      possibilityArrayRight[index] = false;
      return;
    }

    const newIdArray = [...listDropArea.generatedNumbersIds];
    newIdArray[index] = `${currentNum}`;
    const newFilteredIdArray = newIdArray.filter((e) => e !== "0");
    const parsedFilteredArray = newFilteredIdArray.map((e) => +e);
    possibilityArrayRight[index] = checkSortedRight(parsedFilteredArray);
  });

  return (
    <RightContainer>
      {listDropArea.generatedNumbersIds.map((numberId, index) => {
        return (
          <Droppable
            droppableId={index.toString()}
            key={index}
            isDropDisabled={!possibilityArrayRight[index]}
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
