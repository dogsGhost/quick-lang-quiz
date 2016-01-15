import './../../css/style.scss';
import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import db from './../db';

const App = () => (
  <div>
    <Header />
    <Main src={db} />
    <Footer />
  </div>
);

render(<App />, document.getElementById('app'));
