import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/birthday.png';
import image2 from './images/payday.png';
import image3 from './images/vacation.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: black;
    font-size: 20px;
    font-family: Times New Roman;
    font-weight: bold;
    padding: 100px 150px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 20px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 100px 125px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 100px 118px;
`;

function Question1(props) {
  function handleClick(e) {
    e.preventDefault();
    const answer = {
      option: e.target.dataset.option
    }
    props.handleAnswer(answer)
    props.setTimeOfYear(e.target.value);
    console.log('it is working');
  }

  return (
    <>
    <div>
      <h1>{props.question}</h1>
      <Button1 data-option='optionA' className='optionA' value='birthday' onClick={handleClick}> <span className='highlight'>My birthday</span> </Button1>
      <Button2 data-option='optionB' className='optionB' value='payday' onClick={handleClick}> <span className='highlight'>Pay-day</span> </Button2>
      <Button3 data-option='optionC' className='optionC' value='vacation' onClick={handleClick}> <span className='highlight'>Vacations!</span> </Button3>
    </div>
      
    <div>
      <Link to='/question2'>
        <button type='submit'>NEXT</button>
      </Link>
    </div>
      
    </>
  );
}

export default Question1;
