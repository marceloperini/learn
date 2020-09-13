class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: 'Put your life in the hands of a computer',
      options: [],
    };

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state);

      localStorage.setItem('options', json);
    }
  }

  handleAddOption(option) {
    const { options } = this.state;

    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => (
        optionToRemove !== option
      ))
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const { options } = this.state;

    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];

    alert(option);
  }

  render() {
    const { options, subtitle } = this.state;

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <h1>{title}</h1>
      {subtitle && (<h2>{subtitle}</h2>)}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = (props) => {
  const { handlePick, hasOptions } = props;

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
};

const Options = (props) => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;

  const optionsList = () => {
    return (
      options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))
    );
  }

  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {options.length === 0 && <p>Please add an option to get started!</p>}
      {optionsList()}
    </div>
  );
};

const Option = (props) => {
  const { optionText, handleDeleteOption } = props;

  return (
    <div>
      {optionText}

      <button
        onClick={(e) => { handleDeleteOption(optionText) }}
      >
        remove
      </button>
    </div>
  );
};

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

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div>
        { error && <p>{ error }</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" autoComplete="off" />

          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
