// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    // Implement your solution here
    const wkdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  const wkdays_Index = wkdays.indexOf(S);

  if (wkdays_Index === -1) {
    return "Invalid input day";
  }

  const cal_Index = (wkdays_Index + K) % 7;

  const pIndex = (cal_Index + 7) % 7;

  return wkdays[pIndex];
}
