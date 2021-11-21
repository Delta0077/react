let visiblity = false;

const details = () => {
  visiblity = !visiblity;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Toggle Visiblity</h1>
      <button onClick={details}>
        {visiblity ? "Hide details" : "Show details"}
      </button>
      {visiblity && (
        <div>
          <p>Here are some details :)</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};
render();
