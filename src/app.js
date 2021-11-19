console.log("App.js is running..........");

const app = {
  title: "Indecision App",
  subTitle: "This is some info about the app.",
  options: ["One", "Two"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const user = {
  name: "Mr Deep",
  age: 25,
  location: "India",
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const appRoot = document.getElementById("app");

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
