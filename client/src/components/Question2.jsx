import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/horror.png';
import image2 from './images/comedy.png';
import image3 from './images/reality.png';

const Button1 = styled.button`
    background-image: url(${image1});
    color: white;
    font-size: 20px;
    font-family: Times New Roman;
    padding: 90px 30px;
    box-shadow: 0px 5px 7px grey;
    cursor: pointer;
    margin: 30px 10px;
  `;

const Button2 = styled(Button1)`
  background-image: url(${image2});
  padding: 90px 1px;
`;

const Button3 = styled(Button1)`
  background-image: url(${image3});
  padding: 90px 1px;
`;

function Question2(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('it is also working');
  }

  return (
      <>
      <div>
        <h1>{props.question} </h1>
        <Button1 className='option-1' onClick={handleClick} >Horror/Thrill</Button1>
        <Button2 className='option-2' onClick={handleClick} >Comedy/Rom-Com</Button2>
        <Button3 className='option-3' onClick={handleClick} >I Prefer Reality-TV</Button3>
      </div>

      <div>
        <Link to='/question3'>
          <button type='button' >NEXT</button>
        </Link>
      </div>

      </>
    );
}

export default Question2;
