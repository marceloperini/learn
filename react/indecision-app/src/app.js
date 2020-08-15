class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.onRemoveAll = this.onRemoveAll.bind(this);
  }

  optionsList() {
    const { options } = this.props;

    return (
      options.map(option => (
        <Option key={option} optionText={option} />
      ))
    );
  }

  onRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.onRemoveAll}>Remove All</button>
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
  hadleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hadleAddOption}>
          <input type="text" name="option" />

          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));