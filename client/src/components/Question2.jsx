import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/horror.png';
import image2 from './images/comedy.png';
import image3 from './images/reality.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: black;
    font-size: 20px;
    font-family: Times New Roman;
    font-weight: bold;
    padding: 160px 80px;
    box-shadow: 0px 5px 7px grey;
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
    props.setGenre(e.target.value);
    console.log('it is also working');
  }

  return (
      <>
      <div>
        <h1>{props.question} </h1>
        <Button1 className='optionA' value='horror' onClick={handleClick}> <span className='highlight'>Horror/Thrill</span> </Button1>
        <Button2 className='optionB' value='comedy' onClick={handleClick}> <span className='highlight'>Comedy/Rom-Com</span> </Button2>
        <Button3 className='optionC' value='tv' onClick={handleClick}> <span className='highlight'>I Prefer Reality-TV</span> </Button3>
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
