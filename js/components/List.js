import React, {Component} from 'react';
import utils from '../utils';

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
  _handleSubmit(e) {
    e.preventDefault();

    let input = this.refs.answerInput;
    let inputValue = utils.clean(input.value);
    let correctAnswer = this.props.data[this.state.curIndex].translation;

    // store the user's input
    if (inputValue) {
      // Check for exact match
      let isCorrect = inputValue === correctAnswer ? true : false;

      // Check for dropped pronoun
      if (!isCorrect) {
        correctAnswer = correctAnswer.split(' ').slice(1).join(' ');
        isCorrect = inputValue === correctAnswer ? true : false;
      }

      // save values
      this.setState({
        answers: this.state.answers.concat([{
          inputValue,
          isCorrect: isCorrect
        }])
      });

      // move to next question
      if (this.state.curIndex < this.props.data.length) {
        this.setState({
          curIndex: this.state.curIndex + 1
        });

        // clear input field
        input.value = '';
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
        <form className="quiz" onSubmit={this._handleSubmit.bind(this)}>
          <span className="quiz-number">
            {this.state.curIndex + 1}
          </span>
          <span className="quiz-text">
            {utils.capitalize(data[this.state.curIndex].english)}.
          </span>
          <input
            className="quiz-input"
            ref="answerInput"
            type="text" />
            <input
              className="quiz-btn"
              type="submit"
              value={
                this.state.curIndex === this.props.data.length - 1 ?
                  'Done' :
                  'Next'
              } />
        </form>
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired
};
