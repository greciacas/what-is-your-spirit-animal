import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/nosleep.png';
import image2 from './images/nap.png';
import image3 from './images/sleep.png';

const Button1 = styled.button`
    background-image: url(${image1});
    flex-direction: row;
    color: black;
    font-size: 20px;
    font-family: Times New Roman;
    font-weight: bold;
    padding: 118px 58px;
    box-shadow: 1px 2px 5px 5px lightgrey;
    cursor: pointer;
    margin: 30px 15px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 120px 100px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 120px 130px;
`;

function Question4(props) {
  function handleClick(e) {
    e.preventDefault();
    e.target.style.borderColor = 'rgb(189, 132, 244)'
    e.target.style.borderWidth = '5px'
    const answer = {
      option: e.target.dataset.option
    }
    props.handleAnswer(answer)
    props.setSleep(e.target.value);
  }

  return (
    <>
    <div>
      <h1>{props.question} </h1>
      <Button1 data-option='optionA' className='optionA' value='none' onClick={handleClick}> <span className='highlight'>None. I'm a Programmer</span> </Button1>
      <Button2 data-option='optionB' className='optionB' value='naps' onClick={handleClick}> <span className='highlight'>I Take Naps Here and There</span> </Button2>
      <Button3 data-option='optionC' className='optionC' value='always' onClick={handleClick}> <span className='highlight'>9hrs, No Less.</span> </Button3>
    </div>
        
    <div>
      <Link to='/results'>
        <button type='submit' >FINISH</button>
      </Link>
    </div>

    </>
  );
}

export default Question4;