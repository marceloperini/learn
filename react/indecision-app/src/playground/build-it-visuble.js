// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    const { visibility } = this.state;

    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggleVisibility}>
          {visibility ? 'Hide details' : 'Show details'}
        </button>

        {visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   isopen: false,
// };

// const onbuttonclick = () => {
//   app.isopen = !app.isopen;

//   render();
// };

// const approot = document.getelementbyid('app');

// const render = () => {
//   const template = (
//     <div classname="visibilitytoggle">
//       <h1>visibility toggle</h1>

//       <button onclick={onbuttonclick}>
//         { app.isopen ? 'hide details' : 'show details'}
//       </button>

//       {(app.isopen)
//         && (
//           <p>hey. these are some details you can now see!</p>
//         )
//       }
//     </div>
//   );

//   reactdom.render(template, approot);
// };

// render();
