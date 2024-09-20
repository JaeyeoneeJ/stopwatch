// 밀리세컨 단위로 렌더링 조정
export const INTERVAL = 1000;

export const MILLISEC_PER_SECOND = 1000;
export const SECOND_PER_HOUR = 3600;
export const SECOND_PER_MINUTE = 60;

export const stopwatchTime = (seconds) => {
  const h = Math.floor(seconds / SECOND_PER_HOUR);
  const m = Math.floor((seconds % SECOND_PER_HOUR) / SECOND_PER_MINUTE);
  const s = seconds - h * SECOND_PER_HOUR - m * SECOND_PER_MINUTE;

  // 00:00:00
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
