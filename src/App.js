import styled from "styled-components";
import StopwatchTest from "./features/StopwatchTest";

const Body = styled.div`
  background-color: gray;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 400px;
  height: 100%;
  margin: 0 auto;
  background-color: black;
  color: white;
  box-sizing: border-box;
  padding: 20px;
`;

function App() {
  return (
    <Body>
      <Wrapper>
        <StopwatchTest />
      </Wrapper>
    </Body>
  );
}

export default App;
