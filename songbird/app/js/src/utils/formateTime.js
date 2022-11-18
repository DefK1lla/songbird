const addZero = (number) => {
  if (number < 10) {
    return '0' + number;
  } else {
    return number;
  }
};

export function formatSeconds(sec) {
  const hours = Math.floor((sec / 60 / 60) % 24),
    minutes = Math.floor((sec / 60) % 60),
    seconds = Math.ceil((sec % 60));

  return `${hours ? addZero(hours) + ':' : ''}${addZero(minutes)}:${addZero(seconds)}`;
}