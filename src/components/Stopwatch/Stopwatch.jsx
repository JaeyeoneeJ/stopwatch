import React from "react";
import useStopwatch from "../../hooks/useStopwatch";
import { stopwatchTime } from "../../utils/stopwatch/constants";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Stopwatch = ({ continueDate = null, realTimeCheckMode = false }) => {
  const { seconds, status, start, stop, reset } = useStopwatch({ currentDate: continueDate, realTimeCheckMode });

  return (
    <Wrapper>
      <Title>{continueDate ? "continueDate: " + continueDate : realTimeCheckMode ? "realtime check" : "all of first Time"}</Title>
      <div>status: {status}</div>
      <div>seconds: {seconds}</div>
      <div>{stopwatchTime(seconds)}</div>
      <button onClick={start}>{"start"}</button>
      <button onClick={stop}>{"stop"}</button>
      <button onClick={reset}>{"reset"}</button>
    </Wrapper>
  );
};

export default Stopwatch;
