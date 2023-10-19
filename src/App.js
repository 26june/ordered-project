import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import HomeScreenLeft from "./components/HomeScreenLeft";
import HomeScreenRight from "./components/HomeScreenRight";
import numbersData from "./numbers-data";

const Container = styled.div`
  background-color: #424549;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

function App() {
  const [initState, setInitState] = useState(numbersData);

  const {
    generatedNumbers,
    myDroppableAreas: { numGenArea, listDropArea },
  } = initState;

  function handleOnDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const dragEndAreaStart = initState.myDroppableAreas[source.droppableId];
    const dragEndAreaEnd = initState.myDroppableAreas.listDropArea;

    const startNumIdsArray = Array.from(dragEndAreaStart.generatedNumbersIds);
    startNumIdsArray.splice(source.index, 1);

    const endNumIdsArray = Array.from(dragEndAreaEnd.generatedNumbersIds);
    endNumIdsArray.splice(+destination.droppableId, 1, draggableId);

    const newNumgenArea = {
      ...dragEndAreaStart,
      generatedNumbersIds: startNumIdsArray,
    };

    const newListDropArea = {
      ...dragEndAreaEnd,
      generatedNumbersIds: endNumIdsArray,
    };

    const newState = {
      ...initState,
      myDroppableAreas: {
        ...initState.myDroppableAreas,
        [newNumgenArea.id]: newNumgenArea,
        [newListDropArea.id]: newListDropArea,
      },
    };

    setInitState(newState);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container className="App">
        <HomeScreenLeft
          key={numGenArea.id}
          generatedNumbers={generatedNumbers}
          numGenArea={numGenArea}
          setInitState={setInitState}
        ></HomeScreenLeft>
        <HomeScreenRight
          key={listDropArea.id}
          generatedNumbers={generatedNumbers}
          listDropArea={listDropArea}
        ></HomeScreenRight>
      </Container>
    </DragDropContext>
  );
}

export default App;

//TODO TRY EVERY POSITION IN THE ARRAY IF NO SORTED POSSIBILITY THEN LOSE
//IF THERES A POSSBILE SPACE THEN STOP CHECKING
