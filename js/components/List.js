import React, {Component} from 'react';
import utils from '../utils';

const ENTER_KEYCODE = 13;
const PERCENT_MULTIPLE = 100;

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
          input_val: utils.clean(e.target.value),
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
    let progressStyles = {
      width:
        `${(this.state.curIndex / this.props.data.length * PERCENT_MULTIPLE)}%`
    };

    if (this.curIndex + 1 === this.props.data.length) {
      let answerNodes = this.state.answers.map((answer, index) => {
        return (
          <div>
            Phrase {index + 1}: {this.props.data[index].en_phrase}<br />
            Your answer: {answer.input_val}<br />
            Correct answer: {answer.correct_val}
          </div>
        );
      });
      return (
        <div>
          <div className="quiz-score">
            You
          </div>
          {answerNodes}
        </div>
      );
    }

    return (
      <div>
        <div className="progress-container">
          <div className="progress-bar" style={progressStyles}></div>
        </div>
        <div className="quiz">
          <span className="quiz-number">
            {this.state.curIndex + 1}
          </span>
          <span className="quiz-text">
            {utils.capitalize(this.props.data[this.state.curIndex].en_phrase)}.
          </span>
          <input
            type="text"
            className="quiz-input"
            onKeyDown={this.handleKeyDown.bind(this)} />
        </div>
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired
};
