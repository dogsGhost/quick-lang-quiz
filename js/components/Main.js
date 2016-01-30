import React, {Component} from 'react';
import List from './List';
import getPhrases from './../phrases';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: '10', // default number of questions
      lang: 'es', // default language
      quizStarted: false // check for toggling UI elements
    };
    // bind our custom methods
    this._handleNewQuiz = this._handleNewQuiz.bind(this);
  }

  // start a new quiz by simply toggling the view
  _handleNewQuiz() {
    this.setState({quizStarted: false });
  }

  render() {
    return (
      <main className="main-content">
        <p className="instructions">
          Translate
          {
            this.state.quizStarted ?
              <span> {this.state.count} </span> :
               <input
                className="instructions-count"
                min="1"
                onChange={(e) => this.setState({ count: e.target.value })}
                step="1"
                type="number"
                value={this.state.count} />
          }
          phrases from English to Spanish.
          Do not use character accents.
          Dropped pronouns are optional.
        </p>
        {
          this.state.quizStarted ?
            <List
              data={getPhrases({
                lang: this.state.lang,
                count: Math.floor(Number(this.state.count)),
                src: this.props.src
              })}
              onNewQuiz={this._handleNewQuiz}
            /> :
            <button
              className="btn"
              onClick={() => this.setState({ quizStarted: true })}
              type="button">
                Start
            </button>
        }
      </main>
    );
  }
}

Main.propTypes = {
  src: React.PropTypes.object.isRequired
};
