import React, {Component} from 'react';

const ENTER_KEYCODE = 13;
const LAST_POS = -1;
const PERCENT_MULTIPLE = 100;
const clean = (string) => {
  // Remove whitespace/possible trailing period and make all letters lowercase
  return string.trim().charAt(LAST_POS) === '.' ?
    string.trim().toLowerCase().slice(0, LAST_POS) : string.trim().toLowerCase();
};

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      curIndex: 0,
      answers: []
    };
  }

  // show the next phrase
  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEYCODE) {
      // store the user's input
      this.setState({
        answers: this.state.answers.concat([{
          input_val: clean(e.target.value),
          correct_val: this.props.data[this.state.curIndex].es_phrase
        }])
      });

      // check if they've answered the last question
      if (this.state.curIndex < this.props.data.length) {
        // move to next question
        this.setState({
          curIndex: this.state.curIndex + 1
        });
        // clear input field
        e.target.value = '';
      } else {
        // TODO: grade the quiz
      }
    }
  }

  render() {
    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    let w = {
      width: `${(this.state.curIndex / this.props.data.length * PERCENT_MULTIPLE)}%`
    };

    if (this.curIndex + 1 === this.props.data.length) {
      return (
        <Answers />
      );
    }

    return (
      <div>
        <div className="progress-container">
          <div className="progress-bar" style={w}></div>
        </div>
        <div className="quiz">
          <span className="quiz-number">
            {this.state.curIndex + 1}
          </span>
          <span className="quiz-text">
            { capitalize(this.props.data[this.state.curIndex].en_phrase) }.
          </span>
          <input type="text" className="quiz-input" onKeyDown={this.handleKeyDown.bind(this)} />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired
};
