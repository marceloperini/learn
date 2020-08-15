const app = {
  isOpen: false,
};

const onButtonClick = () => {
  app.isOpen = !app.isOpen;

  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div className="VisibilityToggle">
      <h1>Visibility Toggle</h1>

      <button onClick={onButtonClick}>
        { app.isOpen ? 'Hide details' : 'Show details'}
      </button>

      {(app.isOpen)
        && (
          <p>Hey. These are some details you can now see!</p>
        )
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();