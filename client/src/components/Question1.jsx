import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Question2 from './Question2';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function Question1() {
  const [questions, setQuestions] = useState('');

  useEffect(() => {
    const getQuestion = async () => {
      const res = await axios.get(`${URL}`, config);
      console.log(res.data);
      setQuestions(res.data);
    }
    getQuestion()
  }, []);

  return (
    <div>
      {/* {questions.map((record) => (
        <h1>{record.fields.first} </h1>
      ))} */}

      <Route exact path='/question1' >
        {/* <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button> */}
        <Link to='/question2'>
          <button type='button' >NEXT</button>
        </Link>
      </Route>
      <Route exact path='/question2'> <Question2 /> </Route>
    </div>
  );
}

export default Question1;
