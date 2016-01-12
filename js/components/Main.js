import React, {Component} from 'react';
import QuizSetup from './QuizSetup';
import List from './List';
import getPhrases from './../phrases';

const DEFAULT_COUNT = 10;

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: Change to false to build out quiz options.
      quizStarted: true,
      lang: 'es',
      count: DEFAULT_COUNT
    };
  }

  handleChange(e) {
    this.setState({
      count: Math.floor(Number(e.value)) || DEFAULT_COUNT
    });
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
                type="text"
                value={this.state.count}
                placeholder={this.state.count}
                onChange={this.handleChange.bind(this)} />
          }
          phrases from English into Spanish. Character accents not required.
        </p>
        {
          this.state.quizStarted ?
            <List data={getPhrases({
              lang: this.state.lang,
              count: this.state.count,
              src: this.props.src
            })} /> :
            <QuizSetup />
        }
      </main>
    );
  }
}

Main.propTypes = {
  src: React.PropTypes.object.isRequired
};
