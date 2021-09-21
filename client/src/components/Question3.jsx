import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/work.png';
import image2 from './images/chill.png';
import image3 from './images/metime.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: white;
    font-size: 20px;
    font-family: Times New Roman;
    padding: 90px 55px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 10px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 90px 0px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 90px 85px;
`;

function Question3(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('it is working as well');
  }

  return (
    <>
    <div>
      <h1>{props.question} </h1>
      <Button1 className='option-1' onClick={handleClick} >Catch Up On Work</Button1>
      <Button2 className='option-2' onClick={handleClick} >Hang Out With Family & Friends</Button2>
      <Button3 className='option-3' onClick={handleClick} >Me Time!</Button3>
    </div>

    <div>
      <Link to='/question4'>
        <button type='button' >NEXT</button>
      </Link>
    </div>

    </>
  );
}

export default Question3;
