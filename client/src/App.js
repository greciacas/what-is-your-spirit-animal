import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import ResultsPage from './components/ResultsPage';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function App() {
  const [questions, setQuestions] = useState({});
  const [timeOfYear, setTimeOfYear] = useState('');
  const [genre, setGenre] = useState('');
  const [offDay, setOffDay] = useState('')
  const [sleep, setSleep] = useState('');

  useEffect(() => {
    const getQuestion = async () => {
      const res = await axios.get(`${URL}`, config);
      const data = res.data.records[1];
      setQuestions(data.fields);
    }
    getQuestion()
  }, []);

  useEffect(() => {
    const getResults = async () => {
      const res = await axios.post(`${URL}`, config);
    }
    getResults()
  }, []);

  return (
    <div className="App">
      <Route exact path='/' >
        <h1>What's Your Spirit Animal?!</h1>
        <h3>Let's Find Out..</h3>
        <Link to='/question1'>
          <button type='button' >START</button>
        </Link>
      </Route>
      <Route exact path='/question1'> <Question1 question={questions.first} setTimeOfYear={setTimeOfYear} /> </Route>
      <Route exact path='/question2'> <Question2 question={questions.second} setGenre={setGenre}/> </Route>
      <Route exact path='/question3'> <Question3 question={questions.third} setOffDay={setOffDay} /> </Route>
      <Route exact path='/question4'> <Question4 question={questions.fourth} setSleep={setSleep} /> </Route>
      <Route exact path='/results'>
        <ResultsPage />
      </Route>
    </div>
  );
}

export default App;
