import { useState, useEffect } from 'react';
import axios from 'axios';
// import Options from './components/Options';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function ResultsPage() {
  const [results, setResults] = useState('');

  useEffect(() => {
    const getResults = async () => {
      const res = await axios.post(`${URL}`, config);
    }
    getResults()
  }, []);

  return (
    <div>
      <h2>Your Spirit Animal is A...</h2>
    </div>
  );
}

export default ResultsPage;
