import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/birthday.png';
import image2 from './images/payday.png';
import image3 from './images/vacation.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: white;
    font-size: 20px;
    font-family: Times New Roman;
    padding: 80px 70px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 10px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 80px 90px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 81px 90px;
`;

function Question1(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('it is working');
  }

  return (
    <>
    <div>
      <h1>{props.question} </h1>
      <Button1 onClick={handleClick} >My birthday</Button1>
      <Button2 onClick={handleClick} >Pay-day</Button2>
      <Button3 onClick={handleClick} >Vacations!</Button3>
    </div>
      
    <div>
      <Link to='/question2'>
        <button type='button' >NEXT</button>
      </Link>
    </div>
      
    </>
  );
}

export default Question1;
