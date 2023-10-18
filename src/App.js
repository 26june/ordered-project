import Home from "./components/Home";
import styled from "styled-components";

const Container = styled.div`
  background-color: #424549;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Container className="App">
      <Home></Home>
    </Container>
  );
}

export default App;
