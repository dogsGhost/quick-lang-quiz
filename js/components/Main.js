import React, {Component} from 'react';
import List from './List';
import getPhrases from './../phrases';

const DEFAULT_COUNT = 10;

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: DEFAULT_COUNT,
      lang: 'es',
      quizStarted: false
    };
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
                onChange={(e) => this.setState({
                  count: Math.floor(Number(e.target.value)) || DEFAULT_COUNT
                })}
                type="number"
                value={this.state.count} />
          }
          phrases from English to Spanish.
          Do not use character accents.
          Dropped pronouns are optional.
        </p>
        {
          this.state.quizStarted ?
            <List data={getPhrases({
              lang: this.state.lang,
              count: this.state.count,
              src: this.props.src
            })} /> :
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
