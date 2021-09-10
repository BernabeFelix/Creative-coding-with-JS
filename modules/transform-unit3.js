const rectangle = document.querySelector("canvas");

const degreesToRadiant = (d) => (d / 180) * Math.PI;

// context = is where the drawing is done (3d/2d)
const context = rectangle.getContext("2d");

const x = window.innerWidth * 0.5;
const y = window.innerHeight * 0.5;
const width = 100;
const height = 100;

context.translate(x, y);

// 0.3 = radiants
context.rotate(degreesToRadiant(45));

context.strokeRect(0, 0, window.innerWidth, window.innerHeight);

//  Draw a rect at the middle of window
context.fillRect(0, 0, width, height);
