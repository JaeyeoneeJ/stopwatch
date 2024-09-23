import React, { useCallback } from "react";
import styled from "styled-components";
import useStopwatch, { STATUS } from "../hooks/useStopwatch";
import { stopwatchTime } from "../utils/stopwatch/constants";

const Wrapper = styled.div``;
const Recorder = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 100;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: black;
  }

  color: white;
`;

const StopwatchRecorder = () => {
  const { seconds, status, start, stop, reset } = useStopwatch({ realTimeCheckMode: true });

  const onClickStart = useCallback(() => {
    if (status === STATUS.STOP) {
      return start();
    } else {
      return stop();
    }
  }, [status, seconds, start, stop]);

  const onClickLap = useCallback(() => {
    return reset();
  }, [status, seconds, start, reset]);

  return (
    <Wrapper>
      <Recorder>{stopwatchTime(seconds)}</Recorder>
      <ButtonLayer>
        <Button onClick={onClickLap}>{"재설정"}</Button>
        <Button onClick={onClickStart}>{status === STATUS.STOP ? "시작" : "중단"}</Button>
      </ButtonLayer>
    </Wrapper>
  );
};

export default StopwatchRecorder;
