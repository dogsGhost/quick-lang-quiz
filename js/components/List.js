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
      let inputValue = utils.clean(e.target.value);
      let correctAnswer = this.props.data[this.state.curIndex].translation;

      // store the user's input
      this.setState({
        answers: this.state.answers.concat([{
          inputValue,
          isCorrect: inputValue === correctAnswer ? true : false
        }])
      });

      // move to next question
      if (this.state.curIndex < this.props.data.length) {
        this.setState({
          curIndex: this.state.curIndex + 1
        });

        // clear input field
        e.target.value = '';
      }
    }
  }

  render() {
    let data = this.props.data;
    let dataLen = data.length;
    let progressStyles = {
      width: `${(this.state.curIndex / dataLen * PERCENT_MULTIPLE)}%`
    };

    // If the last question has been answered.
    if (this.state.curIndex === dataLen) {
      // Calculate how many of the answer are correct.
      let getNumCorrect = () => {
        return this.state.answers.filter((answer) => {
          return (answer.isCorrect);
        }).length;
      };
      let percentage = Math.round(getNumCorrect() / dataLen * PERCENT_MULTIPLE);
      let answerNodes = this.state.answers.map((answer, index) => {
        return (
          <li
            key={index}
            className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
              <span className="answer-line">
                Phrase {index + 1}: {data[index].english}
              </span>
              <span className="answer-line">
                Your answer: {answer.inputValue}
              </span>
              <span className="answer-line">
                Correct answer: {data[index].translation}
              </span>
          </li>
        );
      });

      return (
        <div>
          <p className="quiz-score">
            You scored {percentage}%
             ({getNumCorrect()} out of {dataLen}).
          </p>
          <ol className="answer-list">
            {answerNodes}
          </ol>
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
            {utils.capitalize(data[this.state.curIndex].english)}.
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
