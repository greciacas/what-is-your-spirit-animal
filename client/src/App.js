import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Question1 from './components/Question1';

function App() {
  return (
    <div className="App">
      <Route exact path='/' >
        <h1>What's Your Spirit Animal?!</h1>
        <Link to='/question1'>
        <button type='button' >START</button>
        </Link>
      </Route>
      <Route exact path='/question1'> <Question1 /> </Route>
    </div>
  );
}

export default App;
