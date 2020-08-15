'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: []
    };

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      var options = this.state.options;


      if (!option) {
        return 'Enter valid value to add item';
      } else if (options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var options = this.state.options;


      var randomNum = Math.floor(Math.random() * options.length);
      var option = options[randomNum];

      alert(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          options = _state.options,
          title = _state.title,
          subtitle = _state.subtitle;


      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'h2',
          null,
          subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          hasOptions = _props2.hasOptions,
          handlePick = _props2.handlePick;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: handlePick,
            disabled: !hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options(props) {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
  }

  _createClass(Options, [{
    key: 'optionsList',
    value: function optionsList() {
      var options = this.props.options;


      return options.map(function (option) {
        return React.createElement(Option, { key: option, optionText: option });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var handleDeleteOptions = this.props.handleDeleteOptions;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: handleDeleteOptions },
          'Remove All'
        ),
        this.optionsList()
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var optionText = this.props.optionText;


      return React.createElement(
        'div',
        null,
        optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.state = {
      error: undefined
    };

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    return _this6;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var error = this.state.error;


      return React.createElement(
        'div',
        null,
        error && React.createElement(
          'p',
          null,
          error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
