import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Options from './Options';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function ResultsPage(props) {
  const [results, setResults] = useState(0);
  const fields = {
    results
  }

  useEffect(() => {
    const postResults = async () => {
      const res = await axios.post(`${URL}`, { fields }, config);
      const data = res.data.records[0, 2, 3]
      setResults(data.fields);
    }
    postResults()
  }, []);

  return (
    <div>
      <h2>You're A...</h2>
      <Options answers={props.answers} />
      <Link to='/viewresults'>Tap to View Results Overall</Link>
      <h4><Link to='/'>Home</Link></h4>
    </div>
  );
}

export default ResultsPage;
