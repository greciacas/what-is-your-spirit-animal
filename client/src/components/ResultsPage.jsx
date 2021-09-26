import { Link } from 'react-router-dom';
import Options from './Options';
import Form from './Form';

function ResultsPage(props) {
  return (
    <div>
      <h2>You're A...</h2>
      <Options answers={props.answers} />
      <Form/>
      <h3><Link to='/'>Home</Link></h3>
    </div>
  );
}

export default ResultsPage;
