import { getNewCanvas, degreesToRadiant, randomRGB } from "../common/utils";

const context = getNewCanvas();

const x = window.innerWidth * 0.5; // middle width
const y = window.innerHeight * 0.5; // middle height
const size = 100; // rect size

// Move the context to the middle of the screen
context.translate(x, y);

// Create a outline rect on context, for visualization purposes
context.strokeRect(0, 0, window.innerWidth, window.innerHeight);

//  Draw a rect at the middle of window
const width = size * 0.5;
const height = size * 0.05;
const rectsAmount = 12;
const rotationDeg = 360 / rectsAmount;

new Array(rectsAmount).fill(1).forEach((_) => {
  context.rotate(degreesToRadiant(rotationDeg));

  context.fillStyle = randomRGB();

  context.fillRect(width * 3, -height * 0.5, width, height);
});
