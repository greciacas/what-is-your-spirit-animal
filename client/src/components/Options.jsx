import { useState, useEffect } from 'react';
import axios from 'axios';

const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
}

function Options() {
    const [] = useState('');

  useEffect(() => {
    const getResults = async () => {
      const res = await axios.post(`${URL}`, config);
    }
    getResults()
  }, []);
  
  if (optionA >= 3) {
    return (
      <div>
        <h1>Crab</h1>
        <img src="https://media.istockphoto.com/vectors/crab-character-smiling-with-big-claws-on-a-white-vector-id1164392644?k=20&m=1164392644&s=612x612&w=0&h=IuXW-Gkz9VC-WLMBrtoICF7rK-gmChuAY-JWBMETxyQ=" />
      </div>
    );
  }
  else if (optionB >= 3) {
    return (
      <div>
        <h1>Cat</h1>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg" />
      </div>
    );
  }
  else if (optionC >= 3) {
    return (
      <div>
      <h1>Bear</h1>
      <img src="https://www.boredpanda.com/blog/wp-content/uploads/2014/03/funny-bears-doing-human-things-20.jpg" />
    </div>
    );
  }
  else {
    // return Math.floor(Math.random() * )
  }
}

export default Options;
