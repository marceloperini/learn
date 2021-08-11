import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
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