import React from 'react';

import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';

import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer-2';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Match pattern='/albums' component={AlbumsContainer} />

      <Match exactly pattern='/' render={() => (
        <Redirect
          to='/albums'
        />
      )} />
    </div>
  </div>
);

export default App;
