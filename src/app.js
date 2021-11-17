console.log("App.js is running..........");

var app = {
  title: "Indecision App",
  subTitle: "This is some info about the app.",
};

var template = (
  <div>
    <h1>{app.title}</h1> <p>{app.subTitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var user = {
  name: "Mr Deep",
  age: 26,
  location: "India",
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:{user.age}</p>
    <p>Location:{user.location}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);