import React, {Component} from 'react';

export default class List extends Component {
  render() {
    let questionNodes = this.props.data.map((phrase, index) => {
      return (
        <li key={index} className="question">
          <span className="question-number">{index + 1}</span>
          <span className="question-text">
            { phrase.en_phrase.charAt(0).toUpperCase() + phrase.en_phrase.slice(1)  }.
          </span>
          <input type="text" className="question-input" />
        </li>
      );
    });

    return (
      <ol className="question-list">
        {questionNodes}
      </ol>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array
};

List.defaultProps = {
  data: []
};
