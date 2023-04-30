const Circle = require("circle");
const Square = require("square");
const Triangle = require("triangle");

class Maker {
  constructor(title, titleColor, shape, shapeColor) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.title = title;
    this.titleColor = titleColor;
  }

  create() {
    let svg;
    switch (shape) {
      case shape === "Circle":
        svg = new Circle(title, titleColor, shapeColor);
        break;
      case shape === "Square":
        svg = new Square(title, titleColor, shapeColor);
        break;
      case shape === "Triangle":
        svg = new Triangle(title, titleColor, shapeColor);
        break;

      default:
        break;
    }
    return svg.render();
  }
}

module.exports = Maker;
