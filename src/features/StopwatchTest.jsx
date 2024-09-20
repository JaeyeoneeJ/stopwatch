import React from "react";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import styled from "styled-components";

const Wrapper = styled.div``;

const StopwatchTest = () => {
  return (
    <Wrapper>
      <Stopwatch />
      <Stopwatch continueDate={new Date("2024-09-19T13:13:35")} />
      <Stopwatch realTimeCheckMode={true} />
    </Wrapper>
  );
};

export default StopwatchTest;
