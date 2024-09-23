import styled from "styled-components";
import StopwatchTest from "./features/StopwatchTest";
import { useState } from "react";
import StopwatchRecorder from "./features/StopwatchRecorder";

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
const Header = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;
const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

function App() {
  const [toggleState, setToggleState] = useState(false);
  return (
    <Body>
      <Header>
        <Title>Stopwatch</Title>
        <Button onClick={() => setToggleState((prev) => !prev)}>toggle</Button>
      </Header>
      <Wrapper>{toggleState ? <StopwatchTest /> : <StopwatchRecorder />}</Wrapper>
    </Body>
  );
}

export default App;
