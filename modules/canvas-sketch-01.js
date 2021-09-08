import canvas from "canvas-sketch";
import { drawMatrix } from "./frames-matrix";

const settings = {
  // dimensions: "A4",
  // pixelsPerInch: 300,
  exporting: true
};

const draw = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    drawMatrix({
      xlength: 5,
      yLength: 5,
      size: 60,
      gap: 20,
      innerContext: context,
      startPoint: 100
    });
  };
};

canvas(draw, settings);
