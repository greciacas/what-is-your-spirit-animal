import { Link } from 'react-router-dom';

function Question4(props) {
  return (
    <div>
        <h1>{props.question} </h1>
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
  
        <Link to='/results'>
          <button type='button' >FINISH</button>
        </Link>
        
      </div>
  );
}

export default Question4;