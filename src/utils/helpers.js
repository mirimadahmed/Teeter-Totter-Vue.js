const helpers = {
  generateRandomNumber(min = 0, max = 1) {
    return min + Math.round(Math.random() * max);
  },
  generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  },
  getShapesSum(shapes = [], isLeft) {
    return shapes.reduce((total, current) => {
      const left = isLeft ? (50 - current.left) : current.left;

      // eslint-disable-next-line no-param-reassign
      total += current.weight * left;

      return total;
    }, 0);
  },
};

export default helpers;
