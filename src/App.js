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

  function handleOnDragEnd() {
    console.log("Hello Drag Over");
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container className="App">
        <HomeScreenLeft
          key={numGenArea.id}
          generatedNumbers={generatedNumbers}
          numGenArea={numGenArea}
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
