import styled from "styled-components";
import HomeScreenLeft from "./components/HomeScreenLeft";
import HomeScreenRight from "./components/HomeScreenRight";

const Container = styled.div`
  background-color: #424549;
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

function App() {
  return (
    <Container className="App">
      <HomeScreenLeft></HomeScreenLeft>
      <HomeScreenRight></HomeScreenRight>
    </Container>
  );
}

export default App;
