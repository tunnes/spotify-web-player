function convertToHumanTime(time) {
  let seconds = parseInt((time / 1000) % 60, 10);
  let minutes = parseInt((time / 60000) % 60, 10);
  seconds = seconds > 10 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

export default convertToHumanTime;
