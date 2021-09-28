import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useState} from 'react';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import ResultsPage from './components/ResultsPage';

// const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// }

function App() {
  const [timeOfYear, setTimeOfYear] = useState('');
  const [genre, setGenre] = useState('');
  const [offDay, setOffDay] = useState('')
  const [sleep, setSleep] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer])
  }

  return (
    <div className="App">
      <Route exact path='/' >
        <h1>What's Your Spirit Animal?!</h1>
        <h3>Let's Find Out..</h3>
        <Link to='/question1'>
          <button type='button' >START</button>
        </Link>
      </Route>

      <Route exact path='/question1'>
        <Question1
        question='Favorite Time of Year?'
        handleAnswer={handleAnswer}
        timeOfYear={timeOfYear}
        setTimeOfYear={setTimeOfYear} />
      </Route>

      <Route exact path='/question2'>
        <Question2
          question='Preferred movie genre?'
          handleAnswer={handleAnswer}
          genre={genre}
          setGenre={setGenre} />
      </Route>

      <Route exact path='/question3'>
        <Question3
          question='It is your day-off, how do you spend it?'
          handleAnswer={handleAnswer}
          offDay={offDay}
          setOffDay={setOffDay} />
      </Route>

      <Route exact path='/question4'>
        <Question4
          question='How much sleep do you get?'
          handleAnswer={handleAnswer}
          sleep={sleep}
          setSleep={setSleep} />
      </Route>
      
      <Route exact path='/results'>
        <ResultsPage
          answers={answers}
          handleAnswer={handleAnswer}
          timeOfYear={timeOfYear}
          genre={genre}
          offDay={offDay}
          sleep={sleep}/>
      </Route>
    </div>
  );
}

export default App;
