import axios from 'axios';
import { useState } from 'react';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function Form() {
  const [accuracy, setAccuracy] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const field = {
      accuracy
    };
     await axios.post(`${URL}`, { field }, config);
    // console.log(res.data);
    setAccuracy('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>Accuracy Level:</label>
        <input value={accuracy} onChange={(e)=> setAccuracy(e.target.value)} ></input>
        <button type='submit' style={{ fontSize: 15, borderRadius: 300, padding: 2, margin: 5}} >Submit Rating</button>
      </form>
    </div>
  );
}

export default Form;
