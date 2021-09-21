import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/nosleep.png';
import image2 from './images/nap.png';
import image3 from './images/sleep.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: white;
    font-size: 20px;
    font-family: Times New Roman;
    padding: 120px 68px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 10px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 85px 35px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 83px 85px;
`;

function Question4(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('it is working too');
  }

  return (
    <>
    <div>
      <h1>{props.question} </h1>
      <Button1 className='option-1' onClick={handleClick} >None. I'm a Programmer</Button1>
      <Button2 className='option-2' onClick={handleClick} >I Take Naps Here and There</Button2>
      <Button3 className='option-3' onClick={handleClick} >9hrs, No Less.</Button3>
    </div>
        
    <div>
      <Link to='/results'>
        <button type='button' >FINISH</button>
      </Link>
    </div>

    </>
  );
}

export default Question4;