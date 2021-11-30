console.log("App.js is running..........");

const app = {
  title: "Indecision App",
  subTitle: "Put your decision on the hands of computer",
  options: [],
};
const onFormSubmit = (e) => {
  e.preventDefault(); // Prevents full page refresh

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderIndecisionApp();
};
const appRoot = document.getElementById("app");
//app.options.splice(0, 1);

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  //Conditional alert box
  if (app.options.length > 0) {
    alert(option);
  } else {
    alert("Add Some options first!");
  }
};

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
      <button /*disabled={app.options.length === 0}*/ onClick={onMakeDecision}>
        What Should I do?
      </button>
      <button disabled={app.options.length === 0} onClick={removeAll}>
        Remove All
      </button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
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
