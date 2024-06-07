export const second = 1;
export const minute = second * 60;
export const hour = minute * 60;
export const defaultBreakTime = minute * 5;
export const defaultSessionTime = minute * 25;
export const min = minute;
export const max = hour;
export const interval = minute;

export const formattedTime = (time) => {
  const minutes = Math.floor(time / minute);
  const seconds = time % minute;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};
