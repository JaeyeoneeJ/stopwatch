import React, { useCallback, useMemo } from "react";
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
const LapsLayer = styled.div`
  padding: 40px 0;
  width: 100%;
`;
const LapItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const LapText = styled.span``;

const StopwatchRecorder = () => {
  const { seconds, status, start, stop, reset, nextLap, laps, record } = useStopwatch({ realTimeCheckMode: true });

  const onClickStart = useCallback(() => {
    if (status === STATUS.STOP) {
      return start();
    } else {
      return stop();
    }
  }, [status, seconds, start, stop]);

  const onClickLap = useCallback(() => {
    if (seconds !== 0 && status === STATUS.STOP) {
      return reset();
    }
    return record();
  }, [status, seconds, start, reset]);

  const disabledLabButton = useMemo(() => {
    return status === STATUS.STOP && seconds === 0;
  }, [status, seconds]);

  return (
    <Wrapper>
      <Recorder>{stopwatchTime(seconds)}</Recorder>
      <ButtonLayer>
        <Button onClick={onClickLap} disabled={disabledLabButton}>
          {seconds !== 0 && status === STATUS.STOP ? "재설정" : "랩"}
        </Button>
        <Button onClick={onClickStart}>{status === STATUS.STOP ? "시작" : "중단"}</Button>
      </ButtonLayer>
      <LapsLayer>
        {laps.map((lap, index) => (
          <LapItem key={index}>
            <LapText>{`${lap.label} ${lap.id}`}</LapText>
            <LapText>{stopwatchTime(lap.lapTime)}</LapText>
          </LapItem>
        ))}
      </LapsLayer>
    </Wrapper>
  );
};

export default StopwatchRecorder;
