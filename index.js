const inquirer = require("inquirer");
const join = require("path");
const writeFile = require("fs");
const maker = require("./lib/maker");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter three characters for your logo",
    },
    {
      type: "input",
      name: "titleColor",
      message:
        "Enter the text color (Enter a hexidecimal code or color keyword)",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose from the following shapes",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Enter the shape's color (Enter a hexidecimal code or color keyword)",
    },
  ])
  .then((res) => {
    const { title, titleColor, shape, shapeColor } = res;
    const svg = new Maker(title, titleColor, shape, shapeColor);
    return writeFile(
      join(__dirname, ".", "examples", "logo.svg"),
      svg.create()
    );
  })
  .then(() => console.log("Generated logo.svg"));
