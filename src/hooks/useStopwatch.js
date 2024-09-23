import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { INTERVAL, MILLISEC_PER_SECOND } from "../utils/stopwatch/constants";

export const STATUS = {
  PROCESSING: "processing",
  STOP: "stop",
};

const useStopwatch = ({ currentDate = null, realTimeCheckMode = false } = {}) => {
  const [seconds, setSeconds] = useState(currentDate ? Math.floor((new Date() - currentDate) / 1000) : 0);
  const [status, setStatus] = useState(STATUS.STOP);
  const [laps, setLaps] = useState([]);

  const currentTimeRef = useRef(null);
  const durationTimeRef = useRef(null);

  const nextLap = useMemo(() => {
    return {
      id: laps.length + 1,
      label: "랩",
      lapTime: seconds - (laps[laps.length - 1]?.seconds ?? 0),
      seconds,
    };
  }, [seconds, laps]);

  const start = useCallback(() => {
    if (status !== STATUS.STOP) {
      return;
    }

    if (seconds === 0) {
      currentTimeRef.current = new Date();
    }
    setStatus(STATUS.PROCESSING);
  }, [status, seconds]);

  const stop = useCallback(() => {
    if (status !== STATUS.PROCESSING) {
      return;
    }

    setStatus(STATUS.STOP);
    clearInterval(intervalRef.current); // 멈춤 시 불필요한 setInterval이 돌지 않도록 적용
  }, [status]);

  const reset = useCallback(() => {
    // todo: 이미 상태가 정지이여야만 리셋 가능
    if (status !== STATUS.STOP) {
      setStatus(STATUS.STOP);
    }

    setSeconds(0);
    setLaps([]);
    clearInterval(intervalRef.current); // 리셋 시 불필요한 setInterval이 돌지 않도록 적용
  }, [status]);

  const record = useCallback(() => {
    if (status !== STATUS.PROCESSING) {
      return;
    }

    setLaps((prev) => [...prev, nextLap]); // 배열을 단순히 추가만 하면 안됨. 의존성은 주소를 참조하고 있어서 안 바뀜
  }, [status, nextLap]);

  useEffect(() => {
    if (currentDate) {
      currentTimeRef.current = currentDate;
    }
  }, [currentDate]);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (status === STATUS.PROCESSING) {
      intervalRef.current = setInterval(() => {
        const currentTime = new Date();

        durationTimeRef.current = (currentTime - currentTimeRef.current) / 1000;

        setSeconds((prev) => {
          const newSeconds = prev + INTERVAL / MILLISEC_PER_SECOND;
          if (Math.abs(durationTimeRef.current - newSeconds) < 1 || realTimeCheckMode) {
            return newSeconds;
          } else {
            return Math.floor(durationTimeRef.current); // 실제 시간과 js 시간의 오차가 1초 이상 발생 시 실제 시간을 강제로 사용
          }
        });
      }, INTERVAL);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [status, realTimeCheckMode]);

  return {
    seconds,
    status,
    laps,
    start,
    stop,
    reset,
    record,
    nextLap,
  };
};

export default useStopwatch;
