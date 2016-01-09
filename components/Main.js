import React, {Component} from 'react';
import List from './List';

export default class Main extends Component {
  render() {
    return (
      <main className="main-content">
        <p className="instructions">
          Translate 10 phrases from English into Spanish. Character accents not required.
        </p>
        <List data={this.props.data} />
      </main>
    );
  }
}
