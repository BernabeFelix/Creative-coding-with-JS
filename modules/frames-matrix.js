const rectangle = document.querySelector("canvas");

const context = rectangle.getContext("2d");

// Given a numer of elements x and y create a matrix of frames where
// 1: they will have a fixed width/height
// 2: some of them should, randomly, have an internal outline

export const drawMatrix = ({
  xlength,
  yLength,
  size,
  gap,
  innerContext = context,
  startPoint = 100
}) => {
  const itemsX = new Array(xlength).fill(1);
  const itemsY = new Array(yLength).fill(1);
  const outlineSize = size / 2;
  let pointX, pointY;

  itemsX.forEach((_, i) => {
    itemsY.forEach((_, j) => {
      pointX = startPoint + size * i + gap * i;
      pointY = startPoint + size * j + gap * j;

      innerContext.strokeRect(pointX, pointY, size, size);

      // Draw internal outline randonmly
      if (Math.random() > 0.5) {
        pointX = pointX + outlineSize / 2;
        pointY = pointY + outlineSize / 2;

        innerContext.strokeRect(pointX, pointY, outlineSize, outlineSize);
      }
    });
  });
};

// drawMatrix(5, 5, 60, 20);
