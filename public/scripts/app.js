"use strict";

console.log("App.js is running..........");

var app = {
  title: "Indecision App",
  subTitle: "This is some info about the app.",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var user = {
  name: "Mr Deep",
  age: 25,
  location: "India"
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var count = 0;
var addOne = function addOne() {
  return console.log("addOne");
};
var minusOne = function minusOne() {
  return console.log("Minus One");
};
var resetBtn = function resetBtn() {
  return console.log("Reset");
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    " +1 "
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    " -1 "
  ),
  React.createElement(
    "button",
    { onClick: resetBtn },
    " reset"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
