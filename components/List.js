import React, {Component} from 'react';
// import Question from 'Question';

export default class List extends Component {
  render() {
    let questionNodes = this.props.data.determiner.map((det, index) => {
      return (
        <li key={index}>
          { det.en } | { det.es } | { det.gender }
        </li>
      );
    });

    return (
      <ul className="question-list">
        { questionNodes }
      </ul>
    );
  }
};
