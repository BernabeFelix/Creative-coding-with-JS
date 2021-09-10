export const degreesToRadiant = (d) => (d / 180) * Math.PI;

export const getNewCanvas = () => {
  const rectangle = document.querySelector("canvas");

  // context = is where the drawing is done (3d/2d)
  const context = rectangle.getContext("2d");

  return context;
};

const getRandomWithRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

export const randomRGB = () => {
  const red = getRandomWithRange(0, 255);
  const green = getRandomWithRange(0, 255);
  const blue = getRandomWithRange(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
