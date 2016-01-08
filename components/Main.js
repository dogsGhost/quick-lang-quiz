import React, {Component} from 'react';
import OptionsBox from './OptionsBox';
import List from './List';

export default class Main extends Component {
  render() {
    return (
      <main className="main-content">
        <OptionsBox />
        <p>Translate 10 phrases from one language into another.</p>
        <List data={this.props.data} />
      </main>
    );
  }
};
