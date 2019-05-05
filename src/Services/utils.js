export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function strToDate(str) {
  if (!str) {
    return new Date();
  }
  const parts = str.split(/\D/);
  return new Date(parts[0], --parts[1], parts[2]);
}

export function dateToStr(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
}
