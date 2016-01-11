import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import phrases from '../phrases.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main data={this.props.data} />
        <Footer />
      </div>
    );
  }
}

render(<App data={phrases} />, document.getElementById('app'));
