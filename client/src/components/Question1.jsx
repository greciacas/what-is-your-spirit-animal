import { Link } from 'react-router-dom';

function Question1(props) {
  return (
    <div>
      <h1>{props.question} </h1>
      <button>Option 1</button>
      <button>Option 2</button>
      <button>Option 3</button>

      <Link to='/question2'>
        <button type='button' >NEXT</button>
      </Link>
      
    </div>
  );
}

export default Question1;
