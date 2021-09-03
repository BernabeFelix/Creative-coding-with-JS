const rectangle = document.querySelector("canvas");

// context = is where the drawing is done (3d/2d)
const context = rectangle.getContext("2d");

//  1 - Create rectangle
// Set color (default is black)
context.fillStyle = "lightblue";

//  Create a filled rectangle
context.fillRect(
  100, // x from 0 (top-left)
  100, // y
  400, // width
  400 // height
);

//  2 - outline
context.lineWidth = 10;
context.strokeStyle = "orange";
context.beginPath();
context.rect(100, 100, 400, 400);
//  Creates the actual outline, if we wanted we could use fill instead
context.stroke();
// This equals to ctx.rect + ctx.stroke
// context.strokeRect(100, 100, 400, 400);

// 3 - Circle
context.lineWidth = 5;
context.strokeStyle = "red";
context.beginPath();
context.arc(300, 300, 200, 0, 360);
context.stroke();
