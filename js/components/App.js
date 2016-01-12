import React from 'react';
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

const App = () => (
  <div>
    <Header />
    <Main data={quizData} />
    <Footer />
  </div>
);

render(<App />, document.getElementById('app'));
