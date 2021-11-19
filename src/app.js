console.log("App.js is running..........");

const app = {
  title: "Indecision App",
  subTitle: "This is some info about the app.",
  options: [],
};
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderIndecisionApp();
};
const appRoot = document.getElementById("app");
//app.options.splice(0, 1);

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};
const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();

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
