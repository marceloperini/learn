import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    console.log('testing')

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