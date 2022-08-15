export function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomSign() {
  const sign = ['-', '+'];
  const index = getRandomNum(0, 2);
  return sign[index]
}

export const getSign = (a) => {
  switch (a) {
    case 2: {
      return '-';
    }
    case 0: {
      return '+';
    }
    default: {
      return getRandomSign();
    }
  }
}