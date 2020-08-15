class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: []
    };

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleAddOption(option) {
    const { options } = this.state;

    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    const { options } = this.state;

    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    alert(option);
  }

  render() {
    const { options, title, subtitle } = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { hasOptions, handlePick } = this.props;

    return (
      <div>
        <button
          onClick={handlePick}
          disabled={!hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  optionsList() {
    const { options } = this.props;

    return (
      options.map(option => (
        <Option key={option} optionText={option} />
      ))
    );
  }

  render() {
    const { handleDeleteOptions } = this.props;

    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove All</button>
        {this.optionsList()}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { optionText } = this.props;

    return (
      <div>
        {optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        { error && <p>{ error }</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />

          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
