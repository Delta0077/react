"use strict";

console.log("App.js is running..........");

var app = {
  title: "Indecision App",
  subTitle: "This is some info about the app.",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderIndecisionApp();
};
var appRoot = document.getElementById("app");
//app.options.splice(0, 1);

var removeAll = function removeAll() {
  app.options = [];
  renderIndecisionApp();
};
var renderIndecisionApp = function renderIndecisionApp() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();

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
