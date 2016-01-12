import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import getPhrases from './../phrases';
import db from './../db';

const quizData = getPhrases({
  lang: 'es',
  count: 10,
  src: db
});

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

render(<App data={quizData} />, document.getElementById('app'));
