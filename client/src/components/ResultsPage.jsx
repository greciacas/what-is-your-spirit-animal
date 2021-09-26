import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Options from './Options';
import Form from './Form';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function ResultsPage(props) {
  const [accuracy, setAccuracy] = useState('');
  const { timeOfYear, genre, offDay, sleep } = props;
  async function handleSubmit(e) {
    e.preventDefault();
    const fields = {
      first:timeOfYear,
      second:genre,
      third:offDay,
      fourth:sleep,
      accuracy:accuracy,
    };
    await axios.post(`${URL}`, { fields }, config);
    setAccuracy('')
  }

  return (
    <div>
      <h2>You're A...</h2>
      <Options answers={props.answers} />
      <Form
        accuracy={accuracy}
        setAccuracy={setAccuracy}
        handleSubmit={handleSubmit} />
      <h3 onClick={(e)=> e.preventDefault()} ><Link to='/'>Home</Link></h3>
    </div>
  );
}

export default ResultsPage;
