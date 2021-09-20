import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Question3 from './Question3';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function Question2() {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const getQuestion = async () => {
      const res = await axios.get(`${URL}`, config);
      console.log(res.data);
      const { fields } = res.data.records;
      setQuestion(fields.second);
    }
    getQuestion()
  }, []);
  return (
    <div question={question} >
      <Route exact path='/question2' >
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
        <Link to='/question3'>
          <button type='button' >NEXT</button>
        </Link>
      </Route>
      <Route exact path='/question3'> <Question3 /> </Route>
    </div>

  );
}

export default Question2;