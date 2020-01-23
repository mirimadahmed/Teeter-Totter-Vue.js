const helpers = {
  generateRandomNumber(min = 0, max = 1) {
    return min + Math.round(Math.random() * max);
  },
  generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  },
};

export default helpers;
