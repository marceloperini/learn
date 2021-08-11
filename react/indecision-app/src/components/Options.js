import React from 'react';
import Option from './Option';

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

export default Options;