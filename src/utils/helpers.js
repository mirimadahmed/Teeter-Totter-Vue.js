function* getID() {
  let i = 1;
  while (true) yield i += 1;
}

const helpers = {
  getRandomID: getID(),
  generateRandomNumber(min = 0, max = 1) {
    return min + Math.round(Math.random() * max);
  },
  generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  },
  getShapesSum(shapes = [], isLeft) {
    let total = 0;
    shapes.forEach((element) => {
      const left = isLeft ? (50 - element.left) : element.left;
      total += element.weight * left;
    });

    return total;
  },
};

export default helpers;
