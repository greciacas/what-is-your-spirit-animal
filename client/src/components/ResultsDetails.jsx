import { useState, useEffect } from 'react';

function ResultsDetails(props) {
  const [birthday, setBirthday] = useState([]);
  const [payday, setPayday] = useState([]);
  const [vacation, setVacation] = useState([]);

  useEffect(() => {
    const bdayResult = props.results?.filter(result => result.fields.first === "birthday")
    setBirthday(bdayResult);
    // console.log('results', bdayResult);
    // console.log(props.results);
  }, [])
  console.log(birthday);

  return (
    <div>
      <p>{`${birthday.length} people chose birthday`}</p>
      <p>{birthday?.map((b) => (
        console.log(b)
      ))}</p>
    </div>
  );

}
export default ResultsDetails;
