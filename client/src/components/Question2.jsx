import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/horror.png';
import image2 from './images/comedy.png';
import image3 from './images/reality.png';

const Button1 = styled.button`
    background-image: url(${image1});
    flex-direction: row;
    color: black;
    font-size: 20px;
    font-family: Times New Roman;
    font-weight: bold;
    padding: 160px 80px;
    box-shadow: 1px 2px 5px 5px lightgrey;
    cursor: pointer;
    margin: 30px 30px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 160px 55px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 140px 85px;
`;

function Question2(props) {
  function handleClick(e) {
    e.preventDefault();
    e.target.style.borderColor = 'rgb(189, 132, 244)'
    e.target.style.borderWidth = '5px'
    const answer = {
      option: e.target.dataset.option
    }
    props.handleAnswer(answer)
    props.setGenre(e.target.value);
  }

  return (
      <>
      <div>
        <h1>{props.question} </h1>
        <Button1 data-option='optionA' className='optionA' value='horror' onClick={handleClick}> <span className='highlight'>Horror/Thrill</span> </Button1>
        <Button2 data-option='optionB' className='optionB' value='comedy' onClick={handleClick}> <span className='highlight'>Comedy/Rom-Com</span> </Button2>
        <Button3 data-option='optionC' className='optionC' value='tv' onClick={handleClick}> <span className='highlight'>I Prefer Reality-TV</span> </Button3>
      </div>

      <div>
        <Link to='/question3'>
          <button type='submit' >NEXT</button>
        </Link>
      </div>

      </>
    );
}

export default Question2;
